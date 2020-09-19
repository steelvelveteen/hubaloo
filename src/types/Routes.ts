import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type Routes = {
    routeId: number;
    path: string;
    icon: OverridableComponent<SvgIconTypeMap>;
    routeName: string;
    component: React.FunctionComponent;
    layout: string;
};
