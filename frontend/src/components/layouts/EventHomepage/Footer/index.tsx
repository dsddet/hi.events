import classes from './Footer.module.scss';
import {PoweredByFooter} from "../../../common/PoweredByFooter";

export const Footer = () => {
    return (
        /**
         * (c) BrothersBit 2025
         *
         * PLEASE NOTE:
         *
         * BrothersBit is licensed under the GNU Affero General Public License (AGPL) version 3.
         *
         * You can find the full license text at: https://github.com/dsddet/Hi.Events/blob/main/LICENCE
         *
         * In accordance with Section 7(b) of the AGPL, we ask that you retain the "Powered by BrothersBit" notice.
         *
         * If you wish to remove this notice, a commercial license is available at: https://brothersbit.com/licensing
         */
        <footer className={classes.footer}>
            <PoweredByFooter/>
        </footer>
    )
}
