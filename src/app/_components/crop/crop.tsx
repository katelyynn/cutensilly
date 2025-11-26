'use client';

import * as Select from '@radix-ui/react-select';
import { useEffect, useRef, useState } from "react";
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import { useDropzone } from 'react-dropzone';
import styles from './crop.module.css';
import { KathyClicky } from '../clicky/clicky';

export default function AvatarCropper() {
    const [step, set_step] = useState<1 | 2 | 3>(1);
    const [src, set_src] = useState<string | null>(null);
    const [crop_data, set_crop_data] = useState<string | null>(null);
    const image_ref = useRef<HTMLImageElement | null>(null);
    const cropper_ref = useRef<Cropper | null>(null);
    const [download_type, set_download_type] = useState<"image/png" | "image/jpeg" | "image/webp">("image/png");
    const [orig_filename, set_orig_filename] = useState<string | null>(null);

    useEffect(() => {
        if (step == 2 && image_ref.current && src) {
            cropper_ref.current?.destroy();
            cropper_ref.current = new Cropper(image_ref.current, {
                viewMode: 3,
                dragMode: 'crop',
                movable: true,
                zoomable: true,
                scalable: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                background: false,
                guides: true,
                autoCropArea: 1
            });
        }
    }, [step, src]);

    const handleFile = (file: File) => {
        if (!file.type.startsWith('image/')) return;

        set_orig_filename(file.name);

        const reader = new FileReader();
        reader.onload = () => {
            set_src(reader.result as string);
            set_step(2);
        }
        reader.readAsDataURL(file);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {'image/*': []},
        maxFiles: 1,
        onDrop: (files: File[]) => {
            if (files[0]) handleFile(files[0]);
        }
    });

    const crop_image = () => {
        if (!cropper_ref.current) return;

        const canvas = cropper_ref.current.getCroppedCanvas();
        set_crop_data(canvas.toDataURL('image/png'));
        set_step(3);
    }

    const back = () => {
        if (step == 2) {
            set_step(1);
            set_src(null);
            set_crop_data(null);

            cropper_ref.current?.destroy();
            cropper_ref.current = null;
        } else if (step == 3) {
            set_step(2);
            set_crop_data(null);
            cropper_ref.current?.destroy();
            cropper_ref.current = null;
        }
    }

    const download = () => {
        if (!cropper_ref.current) return;

        const canvas = cropper_ref.current.getCroppedCanvas();
        const mime = download_type;
        const extension = mime.split("/")[1];

        let name = "avatar";
        if (orig_filename) name = orig_filename.replace(/\.[^/.]+$/, '');

        const dataUrl = canvas.toDataURL(mime);

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${name}_crop.${extension}`;
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.crop}>
            {step == 1 && (
                <div className={`${styles.upload} ${isDragActive ? styles.dragging : ''}`} {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>u can let go now~</p>
                    ) : (
                        <p>upload or drop a file</p>
                    )}
                </div>
            )}

            {step == 2 && src && (
                <>
                    <div className={styles.container}>
                        <img ref={image_ref} src={src} alt="image to crop" />
                    </div>
                    <div className={styles.actions}>
                        <KathyClicky elem="button" link={back}>
                            back
                        </KathyClicky>
                        <KathyClicky elem="button" primary link={crop_image}>
                            crop
                        </KathyClicky>
                    </div>
                </>
            )}

            {step == 3 && crop_data && (
                <>
                    <div className={styles.preview}>
                        <img src={crop_data} alt="cropped image" />
                    </div>
                    <div className={styles.actions}>
                        <KathyClicky elem="button" link={back}>
                            back
                        </KathyClicky>
                        <div className={styles.actions_wrap}>
                            <KathyClicky elem="button" primary link={download}>
                                download as
                            </KathyClicky>
                            <Select.Root value={download_type} onValueChange={value => set_download_type(value as any)}>
                                <>
                                    <Select.Trigger className="selector">
                                        <Select.Value />
                                        <img src={'/chevrondown.png'} />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content className={styles.menu}>
                                            <Select.Viewport>
                                                <Select.Item value="image/png" className={styles.item}>
                                                    <Select.ItemText>png</Select.ItemText>
                                                    <Select.ItemIndicator><img src={'/check.png'} /></Select.ItemIndicator>
                                                </Select.Item>
                                                <Select.Item value="image/jpeg" className={styles.item}>
                                                    <Select.ItemText>jpeg</Select.ItemText>
                                                    <Select.ItemIndicator><img src={'/check.png'} /></Select.ItemIndicator>
                                                </Select.Item>
                                                <Select.Item value="image/webp" className={styles.item}>
                                                    <Select.ItemText>webp</Select.ItemText>
                                                    <Select.ItemIndicator><img src={'/check.png'} /></Select.ItemIndicator>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </>
                            </Select.Root>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
