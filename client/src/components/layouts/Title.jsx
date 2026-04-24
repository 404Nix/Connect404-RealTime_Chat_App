import React from "react";
import { Helmet } from "react-helmet-async";
const Title = ({
    title = "Connect404",
    description = "A ChatApp made by nix404",
}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </>
    );
};

export default Title;
