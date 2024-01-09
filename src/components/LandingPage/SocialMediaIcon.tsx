import { ReactNode } from "react";

type SocialMediaIcon = {
    icon: ReactNode; 
}

export default function SocialMediaIcon({icon}: SocialMediaIcon){
    return (
        <li><a href={'javascript:void(0);'}>{icon}</a></li>
    )
}