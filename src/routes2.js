
//import Buttons from "views/components/Buttons.js";
//import Calendar from "views/Calendar.js";
//import Charts from "views/Charts.js";
import Overview_Merchant from "views/Overview_Merchant.js";
import Dashboard_Today_Merchant from "views/Dashboard_Today_Merchant.js";
//import Dashboard_Today from "views/Dashboard_Today.js";
import Dashboard_LastMonth_Merchant from "views/Dashboard_LastMonth_Merchant.js";
import Dashboard_Month2Date_Merchant from "views/Dashboard_Month2Date_Merchant.js";
//import ExtendedForms from "views/forms/ExtendedForms.js";
//import ExtendedTables from "views/tables/ExtendedTables.js";
//import FullScreenMap from "views/maps/FullScreenMap.js";
//import GoogleMaps from "views/maps/GoogleMaps.js";
//import GridSystem from "views/components/GridSystem.js";
//import Icons from "views/components/Icons.js";
//import LockScreen from "views/pages/LockScreen.js";
import Login from "views/pages/Login.js";
//import Notifications from "views/components/Notifications.js";
//import Panels from "views/components/Panels.js";
//import ReactTables from "views/tables/ReactTables.js";
//import Register from "views/pages/Register.js";
//import RegularForms from "views/forms/RegularForms.js";
import RegularTables from "views/tables/RegularTables.js";
//import SweetAlert from "views/components/SweetAlert.js";
//import Timeline from "views/pages/Timeline.js";
//import Typography from "views/components/Typography.js";
//import UserProfile from "views/pages/UserProfile.js";
//import ValidationForms from "views/forms/ValidationForms.js";
//import VectorMap from "views/maps/VectorMap.js";
//import Widgets from "views/Widgets.js";
//import Wizard from "views/forms/Wizard.js";

const routes2 = [
  {
    path: "/overview_merchant",
    name: "Overview",
    icon: "nc-icon nc-tv-2",
    component: Overview_Merchant,
    layout: "/dashboard/merchant",
  },
  {
    collapse: true,
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
    state: "DashCollapse",
    views: [
      {
        path: "/dashboard_merchant",
        name: "Today",
        mini: "..",
        component: Dashboard_Today_Merchant,
        layout: "/dashboard/merchant",
      },
      {
        path: "/month2month_merchant",
        name: "This Week",
        mini: "..",
        component: Dashboard_Month2Date_Merchant,
        layout: "/dashboard/merchant",
      },
      {
        path: "/lastmonth_merchant",
        name: "This Month",
        mini: "..",
        component: Dashboard_LastMonth_Merchant,
        layout: "/dashboard/merchant",
      },

    ],
  },
  // {
  //   path: "/dashboard",
  //   name: "Overview",
  //   icon: "nc-icon nc-tv-2",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/charts",
  //   name: "Stats",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  //   layout: "/admin",
  // },
  {
    collapse: true,
    name: "Transactions",
    icon: "nc-icon nc-briefcase-24",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Recent Usage",
        mini: "..",
        component: RegularTables,
        layout: "/dashboard/merchant",
      },
      // {
      //   path: "/react-tables",
      //   name: "Account History",
      //   mini: "..",
      //   component: ReactTables,
      //   layout: "/dashboard/merchant",
      // },
      // {
      //   path: "/extended-tables",
      //   name: "This Month",
      //   mini: "TM",
      //   component: ExtendedTables,
      //   layout: "/dashboard/merchant",
      // },
    ],
  },
  {
    collapse: true,
    name: "Account",
    icon: "nc-icon nc-badge",
    state: "pagesCollapse",
    views: [

      // {
      //   path: "/user-profile",
      //   name: "UserProfile",
      //   mini: "UP",
      //   component: UserProfile,
      //   layout: "/dashboard/merchant",
      // },
      {
        path: "/mode",
        name: "Dashboard Mode",
        mini: "..",
        component: Login,
        layout: "/dashboard/switchboard",
      },
      // {
      //   path: "/cardmanagement",
      //   name: "Card Management",
      //   mini: "CM",
      //   component: ExtendedForms,
      //   layout: "/admin",
      // },
      // {
      //   path: "/wizard",
      //   name: "Profile Wizard",
      //   mini: "PW",
      //   component: Wizard,
      //   layout: "/dashboard/merchant",
      // },
      // {
      //   path: "/lock-screen",
      //   name: "LockScreen",
      //   mini: "LS",
      //   component: LockScreen,
      //   layout: "/auth",
      // },

    ],
  },
  // {
  //   collapse: true,
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
      // {
      //   path: "/grid-system",
      //   name: "Grid System",
      //   mini: "GS",
      //   component: GridSystem,
      //   layout: "/admin",
      // },
      //{
      //   path: "/panels",
      //   name: "Panels",
      //   mini: "P",
      //   component: Panels,
      //   layout: "/admin",
      // },
      // {
      //   path: "/sweet-alert",
      //   name: "Sweet Alert",
      //   mini: "SA",
      //   component: SweetAlert,
      //   layout: "/admin",
      // },
      // {
      //   path: "/notifications",
      //   name: "Notifications",
      //   mini: "N",
      //   component: Notifications,
      //   layout: "/admin",
      // },
      // {
      //   path: "/icons",
      //   name: "Icons",
      //   mini: "I",
      //   component: Icons,
      //   layout: "/admin",
      // },
      // {
      //   path: "/typography",
      //   name: "Typography",
      //   mini: "T",
      //   component: Typography,
      //   layout: "/admin",
      // },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Documents",
  //   icon: "nc-icon nc-paper",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Privacy Policy",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Legal Documents",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  //
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   layout: "/admin",
  // },
];

export default routes2;
