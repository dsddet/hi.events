import {t} from "@lingui/macro";
import classes from "./FloatingPoweredBy.module.scss";
import classNames from "classnames";
import React, {useMemo} from "react";
import {iHavePurchasedALicence, isHiEvents} from "../../../utilites/helpers.ts";
import {getConfig} from "../../../utilites/config.ts";

/**
 * (c) BrothersBit 2025
 *
 * PLEASE NOTE:
 *
 * BrothersBit is licensed under the GNU Affero General Public License (AGPL) version 3.
 *
 * You can find the full license text at: https://github.com/dsddet/Hi.Events/blob/main/LICENCE
 *
 * In accordance with Section 7(b) of the AGPL, you must retain the "Powered by BrothersBit" notice.
 *
 * If you wish to remove this notice, a commercial license is available at: https://brothersbit.com/licensing
 */
export const PoweredByFooter = (
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
    if (iHavePurchasedALicence()) {
        return <></>;
    }

    const link = useMemo(() => {
        let host = getConfig("VITE_FRONTEND_URL") ?? "unknown";
        let medium = "app";

        if (typeof window !== "undefined" && window.location) {
            host = window.location.hostname;
            medium = window.location.pathname.includes("/widget") ? "widget" : "app";
        }

        const url = new URL("https://brothersbit.com");
        url.searchParams.set("utm_source", "app-powered-by-footer");
        url.searchParams.set("utm_medium", isHiEvents() ? medium : 'self-hosted-' + medium);
        url.searchParams.set("utm_campaign", "powered-by");
        url.searchParams.set("utm_content", isHiEvents() ? "brothersbit.com" : host);

        return url.toString();
    }, []);

    const footerContent = isHiEvents() ? (
        <>
            {t`Planning an event?`}{" "}
            <a
                href={`${link}`}
                target="_blank"
                className={classes.ctaLink}
                title={"Effortlessly manage events and sell tickets online with BrothersBit"}
            >
                {t`Try BrothersBit Free`}
            </a>
        </>
    ) : (
        <>
            {t`Powered by`}{" "}
            <a
                href={link}
                target="_blank"
                title={"Effortlessly manage events and sell tickets online with BrothersBit"}
            >
                BrothersBit
            </a>{" "}
            🚀
        </>
    );

    return (
        <div {...props} className={classNames(classes.poweredBy, props.className)}>
            <div className={classes.poweredByText}>
                {footerContent}
            </div>
        </div>
    );
}
