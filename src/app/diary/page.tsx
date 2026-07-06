import { getDiaryEntries } from "~/lib/diary";
import { KathyCard, KathyCardList } from "../_components/card/card";
import { DiaryList } from "../_components/diary/diary";

export default function Diary() {
    const entries = getDiaryEntries();

    return (
        <KathyCardList>
            <KathyCard>
                <h1>diary</h1>
                <DiaryList entries={entries} />
            </KathyCard>
        </KathyCardList>
    )
}
