

import Overview_Merchant from "views/Overview_Merchant.js";
import Dashboard_Today_Merchant from "views/Dashboard_Today_Merchant.js";

import Dashboard_LastMonth_Merchant from "views/Dashboard_LastMonth_Merchant.js";
import Dashboard_Month2Date_Merchant from "views/Dashboard_Month2Date_Merchant.js";

import Overview_Customer from "views/Overview_Personal.js";
import Dashboard_Today_Personal from "views/Dashboard_Today_Personal.js";

import Dashboard_LastMonth_Personal from "views/Dashboard_LastMonth_Personal.js";
import Dashboard_Month2Date_Personal from "views/Dashboard_Month2Date_Personal.js";



import RegularTables from "views/tables/RegularTables.js";
import RegularTables2 from "views/tables/RegularTables2.js";


const routes2 = [
  {
    collapse: true,
    name: "Merchant",
    icon: "nc-icon nc-laptop",
    state: "MerchantCollapse",
    views: [


  {
    path: "/overview_merchant",
    name: "Merchant Overview",
    mini:"..",
    //icon: "nc-icon nc-layout-11",
    component: Overview_Merchant,
    layout: "/dashboard/merchant",
  },

  {
    collapse: true,
    name: "Analytics",
    icon: "nc-icon nc-chart-bar-32",
    state: "MDashCollapse",
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
        path: "/merchant-usage",
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
  // {
  //   collapse: true,
  //   name: "Account",
  //   icon: "nc-icon nc-badge",
  //   state: "pagesCollapse",
  //   views: [
  //
  //     // {
  //     //   path: "/user-profile",
  //     //   name: "UserProfile",
  //     //   mini: "UP",
  //     //   component: UserProfile,
  //     //   layout: "/dashboard/merchant",
  //     // },
  //     // {
  //     //   path: "/mode",
  //     //   name: "Dashboard Mode",
  //     //   mini: "..",
  //     //   component: Login,
  //     //   layout: "/dashboard/switchboard",
  //     // },
  //     // {
  //     //   path: "/cardmanagement",
  //     //   name: "Card Management",
  //     //   mini: "CM",
  //     //   component: ExtendedForms,
  //     //   layout: "/admin",
  //     // },
  //     // {
  //     //   path: "/wizard",
  //     //   name: "Profile Wizard",
  //     //   mini: "PW",
  //     //   component: Wizard,
  //     //   layout: "/dashboard/merchant",
  //     // },
  //     // {
  //     //   path: "/lock-screen",
  //     //   name: "LockScreen",
  //     //   mini: "LS",
  //     //   component: LockScreen,
  //     //   layout: "/auth",
  //     // },
  //
  //   ],
  // },
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
],
},

{
  collapse: true,
  name: "Customer",
  icon: "nc-icon nc-mobile",
  state: "CustomerCollapse",
  views: [
    {
      path: "/overview_customer",
      name: "Customer Overview",
      //icon: "nc-icon nc-tv-2",
      mini: "..",
      component: Overview_Customer,
      layout: "/dashboard/merchant",
    },
    {
      collapse: true,
      name: "Analytics",
      icon: "nc-icon nc-chart-bar-32",
      //mini: "..",
      state: "CDashCollapse",
      views: [
        {
          path: "/dashboard_personal",
          name: "Today",
          mini: "-",
          component: Dashboard_Today_Personal,
          layout: "/dashboard/merchant",
        },
        {
          path: "/month2month_personal",
          name: "This Week",
          mini: "-",
          component: Dashboard_Month2Date_Personal,
          layout: "/dashboard/merchant",
        },
        {
          path: "/lastmonth_personal",
          name: "This Month",
          mini: "-",
          component: Dashboard_LastMonth_Personal,
          layout: "/dashboard/merchant",
        },


      ],
    },

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
      icon: "nc-icon nc-money-coins",
      mini:"",
      state: "tables2Collapse",
      views: [
        {
          path: "/customer-usage",
          name: "Recent Usage",
          mini: "..",
          component: RegularTables2,
          layout: "/dashboard/merchant",
        },
        // {
        //   path: "/react-tables",
        //   name: "Account History",
        //   mini: "LM",
        //   component: ReactTables,
        //   layout: "/dashboard/customer",
        // },
        // {
        //   path: "/extended-tables",
        //   name: "Month-2-Date",
        //   mini: "MD",
        //   component: ExtendedTables,
        //   layout: "/dashboard/customer",
        // },
      ],
    },


],
},

];

export default routes2;
