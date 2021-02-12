import React from "react";
import T from "prop-types";
import { themeAttr } from "../helpers";

const iconSize = {
    'xs': '2',
    'sm': '4',
    'md': '6',
    'lg': '8',
    'xl': '10'
}
const textSize = {
    'xs': '1',
    'sm': '2',
    'md': '3',
    'lg': '4',
    'xl': '5'
}
export default function Avatar(allProps) {
    let { size = 'md', username, theme } = allProps;
    const showDefaultAvatar = !!!username || null;
    return (
        <nu-circle theme={theme || themeAttr(allProps)} display="flex" content="center" items="center" color="#text-soft" size={`${iconSize[size]}x`}  >
            {showDefaultAvatar && <nu-icon size={`${iconSize[size]}x`} name='person-circle-outline' />}
            {!showDefaultAvatar &&
                <nu-label text="up" size={`${textSize[size]}x`}>
                    {username?.slice(0, 2)}
                </nu-label>}
        </nu-circle>
    );
}

Avatar.Profile = function AvatarProfile(allProps) {
    let { size = 'md', username, subtitle, showArrow } = allProps;
    return (
        <nu-flex flow="row wrap" theme={themeAttr(allProps)} >
            <nu-card  >
                <nu-flex gap >
                    <Avatar {...allProps} />
                    <nu-block>
                        {username ? <nu-block size={size}>{username}</nu-block> : ''}
                        {subtitle ? <nu-block color="#text-soft" size={size}>{subtitle}</nu-block> : ''}
                    </nu-block>

                    {showArrow &&
                        <nu-block>
                            <nu-icon size={`${textSize[size]}x`} name="chevron-down-outline"></nu-icon>
                        </nu-block>
                    }
                </nu-flex>
            </nu-card>
        </nu-flex>
    )
}

Avatar.propTypes = {
    showArrow: T.bool,
    size: T.string,
    username: T.string,
    subtitle: T.string,

};
