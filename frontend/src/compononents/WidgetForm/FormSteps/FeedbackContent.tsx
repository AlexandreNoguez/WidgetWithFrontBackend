import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { TypeOfFeedback, feedbackTypes } from ".."
import { api } from "../../../Services/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedBackContentProps {
    feedbackType: TypeOfFeedback;
    onRestartRequestFeedback: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContent({
    feedbackType,
    onRestartRequestFeedback,
    onFeedbackSent,
}: FeedBackContentProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    const feedBackTypeInfo = feedbackTypes[feedbackType];

    async function handleSubmitComment(event: FormEvent) {
        event.preventDefault()
        setIsSendingFeedback(true)

        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot,
        })
        setIsSendingFeedback(false)
        onFeedbackSent()
    }

    return (

        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft
                        weight="bold"
                        className="h-4 w-4"
                        onClick={onRestartRequestFeedback}
                    />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedBackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form onSubmit={handleSubmitComment} className="my-4 w-full">
                <textarea
                    className="min-w[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin "
                    placeholder="Conte-nos o que aconteceu!"
                    onChange={(event) => setComment(event.target.value)}
                />

                <footer className="flex mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={comment.length <= 5 || isSendingFeedback}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar sugest??o'}
                    </button>
                </footer>

            </form>
        </>
    )
}