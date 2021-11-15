import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard />,
    },
    {
        title: 'Cadastros',
        path: '/cadastros',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Clientes',
                path: '/cadastros/clientes',
                icon: <FaIcons.FaUserFriends />,
                cName: 'sub-nav'
            },
            {
                title: 'Fornecedores',
                path: '/cadastros/fornecedores',
                icon: <FaIcons.FaTruck />,
                cName: 'sub-nav'
            },
            {
                title: 'Notas Fiscais',
                path: '/cadastros/notas-fiscais',
                icon: <IoIcons.IoMdDocument />
            }
        ]
    },
    {
        title: 'Relatórios',
        path: '/relatorios',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Relatório 01',
                path: '/relatorios/relatorio01',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Relatório 02',
                path: '/relatorios/relatorio02',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            }
        ]
    },
    {
        title: 'Configurações',
        path: '/messages',
        icon: <IoIcons.IoMdSettings />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Dados da Empresa',
                path: '/configuracoes/empresa',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    }
];