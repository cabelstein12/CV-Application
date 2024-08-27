import "./Card.css"
import Info from './Info.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';

export default function Input(){
    return (
        <div className="content">
            <Info />
            <Education />
            <Experience />
        </div>
    )
}