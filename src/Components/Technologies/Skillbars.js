import SkillBar from 'react-skillbars';
import Warning from '../../Assets/Warning.png'

const colors = {
  bar: 'darkred',
  title: {
    text: 'rgb(0, 59, 39)',
    background: '#fff',
  },
};

const skills = [
  { type: 'HTML', level: 100 },
  { type: 'CSS', level: 100 },
  { type: 'JavaScript', level: 100 },
  { type: 'VisualStudio', level: 100 },
  { type: 'React', level: 85 },
  { type: 'NPM', level: 85 },
  { type: 'Bootstrap', level: 85 },
  { type: 'GitHub', level: 85 },
  { type: 'Postgres', level: 75 },
  { type: 'MySQL', level: 75 },
  { type: 'NodeJS', level: 75 },
  { type: 'Redux', level: 60 },
];

const Skillbars = () => {
  return (
    <div className='skillBars'>
    <img className="Warning" id="logo2" src={Warning} alt="img" />
    <span id='skillBars'>
    <SkillBar skills={skills} barBackground={'rgba(255, 255, 255, .4)'} colors={colors} height={'20px'}/>
    </span>
    </div>
  )
}

export default Skillbars