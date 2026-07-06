import path from "path";
import fs from 'fs';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), 'src/diary');

export function getDiaryEntries() {
    const filenames = fs.readdirSync(directory);
    const entries = filenames.map((filename: string) => {
        const id = filename.replace(/\.md$/, '');

        const fullPath = path.join(directory, filename);
        const contents = fs.readFileSync(fullPath, 'utf8');

        const result = matter(contents);

        return {
            id,
            ...result.data
        };
    });

    return entries.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getDiaryEntry(id: string) {
    try {
        const fullPath = path.join(directory, `${id}.md`);
        const contents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(contents);

        return {
            id,
            content,
            data
        };
    } catch {
        return {};
    }
}
