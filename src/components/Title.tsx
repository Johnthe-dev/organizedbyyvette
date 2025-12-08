import {useMemo} from "react";

export const Title = ({className, content, type}: { className?:string, content:string, type?:string}) => {
    const sanitizedContent = useMemo(()=>(
        content?.replace('<p>', '')?.replace('</p>', '')),
    [content]);
    return (
        type === "h1" ?
            <h1
                className={className}
                dangerouslySetInnerHTML={{__html: sanitizedContent}}
            /> :
            <h2
                className={className}
                dangerouslySetInnerHTML={{__html: sanitizedContent}}
            />
    )
}