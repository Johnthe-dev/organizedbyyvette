import {HeroShot} from "./HeroShot.tsx";
import {ContactButtons} from "./ContactButtons.tsx";
import {parse} from "marked";
import {useCallback} from "react";
import type {IContentSection} from "./types.ts";
import {Title} from "./Title.tsx";

const ContentSection = ({content}:{content:IContentSection})=>{
    const processContent = useCallback((content:string):string => {
        return (parse(content) as String).replace('<a ', '<a target="_blank" rel="noopener noreferrer" ');
    },[parse])
    return (
        <div className={content.className}>
            {content.title && <Title content={processContent(content.title.content)} className={content.title.className} type={content.title.type}/>}
            {content.subSections && (
                content.subSections.map((subSection, i) =>{
                    return (
                        <div key={i} className={subSection.className}>
                            {subSection.title && (
                            subSection.title.type === "h1" ?
                                <h1
                                    className={subSection.title.className}
                                    dangerouslySetInnerHTML={{__html:processContent(subSection.title.content) as string}}
                                /> :
                                <h2
                                    className={subSection.title.className}
                                    dangerouslySetInnerHTML={{__html:processContent(subSection.title.content) as string}}
                                />
                            )}
                            {subSection.content && <p dangerouslySetInnerHTML={{__html:processContent(subSection.content) as string}}/>}
                            {subSection?.list?.length && (
                                <ul>
                                    {subSection.list?.map(item=>(<li dangerouslySetInnerHTML={{__html:processContent(item)}}/>))}
                                </ul>
                            )}
                        </div>
                    )
                })
            )}
            {content.hasContactButtons && <ContactButtons />}
        </div>
    )
}
export default function WrappedContentSection({content}:{content:IContentSection}){
    if(content.hasHeroImage){
        return(
            <div className={content.className}>
                <HeroShot />
                <ContentSection content={{...content, className:''}}/>
            </div>
        )
    }
    return (
        <ContentSection content={content} />
    )
}