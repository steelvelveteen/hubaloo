import { Icon, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type Routes = {
    routeId: number;
    path: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: OverridableComponent<SvgIconTypeMap>;
    routeName: string;
    // component: React.FunctionComponent;
    layout: string;
};
