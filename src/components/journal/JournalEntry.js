import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{backgroundSize : 'cover', backgroundImage:'url(https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/597ee3835bafe8bfc71d398d/via-lactea_0.jpg)'}}>
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">un nuevo dia</p>
                <p className="journal__entry-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="journal__entry-date-box">
        <span>Monday</span>
<h4>28</h4>
            </div>
        </div>
    )
}
