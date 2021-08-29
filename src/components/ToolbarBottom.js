import React from "react";
import {BottomToolbar} from "react-onsenui";

const ToolbarBottom = () =>  {
        return (
            <BottomToolbar modifier="aligned">
                <div className="bottom-toolbar-custom-background">
                    <div className="text-center white-text">
                        D.Roman's Credit Union
                    </div>
                </div>
            </BottomToolbar>
        )
}

export default ToolbarBottom;