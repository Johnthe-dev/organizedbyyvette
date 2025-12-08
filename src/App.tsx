import './App.css'
import content from "./content/mainPage.json";
import ContentSection from "./components/ContentSection.tsx";
import type {IContentSection} from "./components/types.ts";

function App() {
    return (
        <div>
            <main className={'container'}>
                {content.mainContent?.map((contentItem, index)=> <ContentSection content={contentItem as IContentSection} key={index}/>)}
            </main>
            <footer>
                {content.footerContent?.map((contentItem, index)=><ContentSection content={contentItem} key={index} />)}
            </footer>
        </div>
    )
}

export default App
