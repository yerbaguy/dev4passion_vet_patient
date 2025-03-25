import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,

                subNavOverview: [
                    {
                        title: 'SubOverview',
                        path: '/overview/sub/overview1',
                        icon: <IoIcons.IoIosPaper />,
                    }
                ]

            }, 

            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,

            },

            {
                title: 'Another',
                path: '/overview/another',
                icon: <IoIcons.IoIosPaper />,

            }
        ]
    },





    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                // title: 'Reports',
                // path: '/reports/reports1',
                // icon: <IoIcons.IoIosPaper />,

                subNavReports: [
                    {
                        title: 'SubReports',
                        path: '/reports/sub/reports1',
                        icon: <IoIcons.IoIosPaper />,
                    }
                ]

            },
            

            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,

            },

            // {
            //     title: 'Reports3',
            //     path: '/reports/reports3',
            //     icon: <IoIcons.IoIosPaper />,

            // },

            // {

            //     title: 'Products',
            //     path: '/products',
            //     icon: <FaIcons.FaCartPlus />,
            // }
        ]
    }
]