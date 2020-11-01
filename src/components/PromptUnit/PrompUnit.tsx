import React from 'react';

import promptUnitStyles from './promptUnitStyles';

const useStyles = promptUnitStyles;

type PromptProps = {
    promptText: string;
    toggle: () => void;
    btnText: string;
}

const PromptUnit: React.FC<PromptProps> = (promptProps: PromptProps) => {
    const classes = useStyles();
    return (
        <div className={classes.promptUnit}>
            <span>{promptProps.promptText}</span>
            <button className={classes.btnAlternative}
                onClick={promptProps.toggle}
                type="button">
                {promptProps.btnText}
            </button>
        </div>
    )
};

export default PromptUnit;
