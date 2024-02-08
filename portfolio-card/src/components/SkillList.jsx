import Skill from './Skill';

export default function SkillList() {
    return (
        <div className='skill-list'>
            <Skill
                skill='Jump'
                emoji='🥇'
                color='pink'
            />
            <Skill
                skill='Climb'
                emoji='🏆'
                color='lightBlue'
            />
            <Skill
                skill='Stay/Wait'
                emoji='🥈'
                color='lavender'
            />
            <Skill
                skill='Balance'
                emoji='🎉'
                color='lightYellow'
            />
        </div>
    );
}
