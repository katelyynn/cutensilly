import { getDiaryEntries } from "~/lib/diary";
import { KathyCard, KathyCardList } from "~/app/_components/card/card";
import { DiaryItemProps, DiaryList } from "~/app/_components/diary/diary";

export default function Diary() {
    const entries: DiaryItemProps[] = getDiaryEntries();

    return (
        <KathyCardList>
            <KathyCard>
                <h1>diary</h1>
                <DiaryList entries={entries} />
            </KathyCard>
        </KathyCardList>
    )
}
