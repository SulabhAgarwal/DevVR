export default product = {
    Product: {
      roomName: 'Product',
      info: `
          * Routers And Switches.
          * View Different Models and Info about them.
          * Learn & Immerse about the products.`,
      adjacentRooms: ['Product_Catalog'],
    },
    Product_Catalog: {
      roomName: 'Product_Catalog',
      info: `
          * Router and Switch are both network connecting devices.
          * Router works at network layer and works as a dispatcher.
          * Router directs traffic and chooses the most efficient route for information,in the form of data packets, to travel across a network.
          * A network switch is a computer networking device which connects various devices together on a single computer network.
          * A switch may also be used to route information in the form of electronic data sent over networks.`,
      img: 'product_catalog.jpg',
      adjacentRooms: ['Routers', 'Switches'],
    },
    Routers: {
      roomName: 'Routers',
      info: `
          * A router connects your business to the world, protects information from security threats.
          * It even decides which devices have priority over others.
          * Router sends data in form of packets.`,
      img: 'routers.jpg',
      adjacentRooms: [
        'Cisco_ASR_1000_Series',
        'Cisco_ASR_9000_Series',
        'Cisco_Carrier_Router_System',
        'Cisco_NCS',
        'Product_Catalog',
      ],
    },
    Cisco_ASR_1000_Series: {
      roomName: 'Cisco_ASR_1000_Series',
      info: `
          * ASR (Aggregation Services Routers).
          * The ASR 1000 Series Routers transform and future-proof the network edge for service providers and enterprises.
          * It offers industry-leading performance, services, reliability, and efficiencies in a compact factor.`,
      img: 'cisco_asr_1000_series.jpg',
      adjacentRooms: ['Cisco_ASR_1006', 'Routers', 'Product_Catalog'],
    },
    Cisco_ASR_1006: {
      roomName: 'Cisco_ASR_1006',
      info: `
          * The Cisco ASR 1006 Router in a 6-rack unit (RU) form factor is the most flexible edge routing solution in the Cisco ASR 1000 Series.
          * Supports Dual route processor, Embedded services processor.
          * Supports Up to 100 Gbps throughput.
          * Supports Up to 12 shared port adapters (SPAs), the highest port density solution of the three Cisco ASR 1000 Routers.`,
      img: 'cisco_asr_1006.jpg',
      adjacentRooms: ['Routers', 'Product_Catalog', 'Cisco_ASR_1000_Series'],
    },
    Cisco_NCS: {
      roomName: 'Cisco_NCS',
      info: `
          * NCS (Network Convergence System)`,
      img: 'cisco_ncs.jpg',
      adjacentRooms: [
        'Cisco_NCS_4216',
        'Cisco_NCS_6000',
        'Routers',
        'Product_Catalog',
      ],
    },
    Cisco_NCS_4216: {
      roomName: 'Cisco_NCS_4216',
      info: `
        * NCS 4216 can be deployed in space-constrained locations such as ETSI 300-mm deep cabinets.
        * Extended Temperature Range supported by device allows it to be deployed in locations with minimum temperature control.
        * Interace Module Slot per Chassis : 16, 2 RSP slots.
        * Rack-Size : 7RU.
        * AirFlow : Side-To-Side.
        * Optional airflow detectors can also be used for customers requiring front-to-back airflow.
        * Fan : 1 Fan Tray with Fan Redundancy.`,
      img: 'cisco_ncs_4216.jpg',
      adjacentRooms: ['Routers', 'Product_Catalog', 'Cisco_NCS'],
    },
    Cisco_NCS_6000: {
      roomName: 'Cisco_NCS_6000',
      info: `
          * NCS 6K is the industry leading core router in terms of scale, performance and service flexibility.
          * It supports the industry's first 1 TB Flex line card.
          * The line card supports 10GE, 40GE or 100GE as well as a fully virtualized OS that delivers ISSU with Zero Packet Loss and Zero Topology Loss.`,
      img: 'cisco_ncs_6000.jpg',
      adjacentRooms: ['Routers', 'Product_Catalog', 'Cisco_NCS'],
    },
    Cisco_ASR_9000_Series: {
      roomName: 'Cisco_ASR_9000_Series',
      info: `
            * ASR (Aggregation Services Routers).
            * The ASR 9000 is a high-density, high performance edge platform suitable for growing or high-demand markets.
            * The ASR is capable of supporting connections from 1G up to 400G, providing operators with a long-term growth platform that scales ahead of demand.`,
      img: 'cisco_asr_9000_series.jpg',
      adjacentRooms: [
        'Cisco_ASR_9001',
        'Cisco_ASR_9010',
        'Cisco_ASR_9922',
        'Routers',
        'Product_Catalog',
      ],
    },
    Cisco_ASR_9001: {
      roomName: 'Cisco_ASR_9001',
      info: `
          * Cisco ASR 9001 is a compact high-capacity Provider Edge (PE) router.
          * It delivers 120 Gbps of non-blocking, full-duplex fabric capacity in a two-rack-unit (2RU) form factor.
          * It has an Integrated Route Switch Processor (RSP).
          * It has two modular bays that support GE, 10 GE, and 40 GE Modular Port Adapters (MPAs).
          * AirFlow : Side-To-Side.
          * Slot per Chassis : Fixed 4x10GE, 2 Modular Port Adapters.
          * Software : IOS-XR.
          * Max Capacity : 240 Gbps.`,
      img: 'cisco_asr_9001.jpg',
      adjacentRooms: ['Routers', 'Product_Catalog', 'Cisco_ASR_9000_Series'],
    },
    Cisco_ASR_9010: {
      roomName: 'Cisco_ASR_9010',
      info: `
            * Cisco ASR 9010, 10 slot model operates in a fully distributed fashion which equates to all packet forwarding decisions.
            * The purpose-built high-density Ethernet line cards are equipped with a flexible programming instructure,high-density Ethernet.
            * Slot per Chassis : 8 Line Cards, 2 RSPs.
            * Bandwidth per slot : 880 Gbps.
            * AirFlow : Front-to-Back.
            * Software : IOS-XR.
            * Max Capacity : 14 Tbps.`,
      img: 'cisco_asr_9010.jpg',
      adjacentRooms: ['Routers', 'Product_Catalog', 'Cisco_ASR_9000_Series'],
    },
    Cisco_ASR_9922: {
      roomName: 'Cisco_ASR_9922',
      info: `
            * Cisco ASR 9922 is a true carrier-class solution.
            * It features the modular, microkernel-based OS, and a full complement of network resiliency schemes.
            * It offers application-level intelligence that focuses on optimized video delivery and mobile Internet.
            * Slot per Chassis : 20 Line Cards, 2 RPs, 7 Fabric Cards.
            * Bandwidth per slot : 4 Tbps.
            * Software : IOS-XR.
            * AirFlow : Front-to-Back.
            * Max Capacity : 160 Tbps.`,
      img: 'cisco_asr_9922.jpg',
      adjacentRooms: ['Routers', 'Product_Catalog', 'Cisco_ASR_9000_Series'],
    },
    Cisco_Carrier_Router_System: {
      roomName: 'Cisco_Carrier_Router_System',
      info: `
            * Carrier Routing System (CRS) is a modular and distributed core router .
            * It enables service providers to deliver data, voice, and video services over a scalable IP Next-Generation Network (NGN) infrastructure.
            * It offers advanced services intelligence, an environmentally-aware design, and system longevity.
            * It supports a wide range of interface speeds from 1GE, 10GE all the way to 100GE on the Ethernet technologies.`,
      img: 'cisco_carrier_router_system.jpg',
      adjacentRooms: ['CRS_X', 'Routers', 'Product_Catalog'],
    },
    CRS_X: {
      roomName: 'CRS_X',
      info: `
            * CRS-X can deliver continuous operations at 400 Gbps per slot.
            * Can offer industry-leading scale from a single chassis to a multi-chassis system.
            * It supports 100G speeds and beyond using programmable Cisco nLight Technology.
            * It can combine intelligent IP, lean core transit, and optical transport services.
            * It can improve network monetization through intelligent Layer 4-7 services.`,
      img: 'crs_x.jpg',
      adjacentRooms: [
        'Routers',
        'Product_Catalog',
        'Cisco_Carrier_Router_System',
      ],
    },
    Switches: {
      roomName: 'Switches',
      info: `
          * A switch helps you to manage the flow of data across the network.
          * Switch sends data in form of packets and frames.
          * A switch can transfer data to any of the other devices, either using half-duplex mode or full-duplex mode.
          * Switches facilitate the sharing of resources by connecting together all the devices, including computers, printers, and servers, in a small business network.`,
      img: 'switches.jpg',
      adjacentRooms: ['Catalyst', 'Nexus_7000', 'Nexus_9000', 'Product_Catalog'],
    },
    Catalyst: {
      roomName: 'Catalyst',
      info: `
          * Cisco Catalyst switches come in a variety of Ethernet-based platforms, providing everything from simple connectivity to high-end, multilayer intelligent service switching solutions.
          * It delivers ease of management and configuration for small to medium-sized enterprise wiring closets in a single system, without the need for additional modules. 
          * These switches also provide high performance switching solutions ideal for public service providers or large private enterprises with a high volume of traffic and mid-sized networks deploying Internet business applications such as IP telephony, e-commerce, or Enterprise Resource Planning (ERP).`,
      img: 'catalyst.jpg',
      adjacentRooms: [
        'Catalyst_6513',
        'Catalyst_3750_Metro',
        'Switches',
        'Product_Catalog',
      ],
    },
    Catalyst_6513: {
      roomName: 'Catalyst_6513',
      info: `
          * The 13-slot Catalyst 6513 chassis is ideally suited for high-performance, high port density Fast and Gigabit Ethernet aggregation in all parts of the network.
          * Support both Cisco Catalyst OS and Cisco IOS Software. 
          * They also support up to a 6000W power supply.
          * Switches provide maximum uptime with redundancy and rapid (1 to 3 seconds) stateful failover across supervisor engines.
          * 80G/slot on all 13 slots w/ Sup2T.
          * Up to 180X10GE ports and 534X1GE ports.
          * 2Tbps system performance, 4 Tbps with VSS.`,
      img: 'catalyst_6513.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Catalyst'],
    },
    Catalyst_3750_Metro: {
      roomName: 'Catalyst_3750_Metro',
      info: `
          * Catalyst 3750 Metro Series Switch (ME-C3750-24TE-M) 24-10/100 Ports, 2 SFP ports for Gigabit Ethernet Access, and 2 SFP-based Enhanced Services (ES) ports.
          * These switches feature hierarchical quality of service (QoS) and traffic shaping, intelligent 802.1Q tunneling, VLAN mapping, Multi-protocol Label Switching (MPLS).`,
      img: 'catalyst_3750_metro.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Catalyst'],
    },
    Nexus_9000: {
      roomName: 'Nexus_9000',
      info: `
          * Nexus 9K switches includes both modular (Nexus 9500) and fixed switches (Nexus 9300).
          * These  switches delivers a fixed, agile, low-cost application-centric infrastructure.
          * These switches address challenges related to application deployment, provisioning and scaling concerns in a physical, virtual and multi-tenant cloud environments.`,
      img: 'nexus_9000.jpg',
      adjacentRooms: [
        'Nexus_9516',
        'Nexus_9508',
        'Nexus_9504',
        'Switches',
        'Product_Catalog',
      ],
    },
    Nexus_9516: {
      roomName: 'Nexus_9516',
      info: `
          * Nexus 9516 offers a comprehensive feature set, high resiliency and a broad range of 1/10/40 Gigabit Ethernet Line Cards.
          * It can meet the most demanding requirements of enterprises, service provider, and cloud data centers.
          * 16 Line Card Slots, 2 Supervisor slots.
          * It supports non-blocking configurations of up to 576 ports of 40GbE, 2,304 ports of 10GbE.
          * It can be used for Nexus 2000 aggregation.
          * It has the ACI Support.
          * Airflow : Front to Back.`,
      img: 'nexus_9516.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Nexus_9000'],
    },
    Nexus_9508: {
      roomName: 'Nexus_9508',
      info: `
          * Nexus 9508 provides high density 1, 10, 25, 40, 50, and 100 GE in a compact, 13-rack-unit modular chassis.
          * This versatile modular switch is designed for high-density, end-of-row, and high-performance aggregation-layer deployments.
          * 8 Line Card Slots, 2 Supervisor slots.
          * It can be used for Nexus 2000 aggregation.
          * It supports non-blocking configurations of up to 64 ports of 100G, 288 ports of 40G, 1,152 ports of 10G.
          * It has the ACI Support.
          * Airflow : Front to Back.`,
      img: 'nexus_9508.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Nexus_9000'],
    },
    Nexus_9504: {
      roomName: 'Nexus_9504',
      info: `
          * Nexus 9504 provides high performance 1, 10, 25, 40, 50 and 100GE GE in a compact 7-rack-unit modular chassis.
          * This versatile modular switch is designed for high-density, end-of-row, and high-performance aggregation-layer deployments.
          * 4 Line Card Slots, 2 Supervisor slots.
          * It can be used for Nexus 2000 aggregation.
          * It supports non-blocking configurations of up to 144 ports of 40GbE and 576 ports of 10GbE.
          * It has the ACI Support.
          * Airflow : Front to Back.`,
      img: 'nexus_9504.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Nexus_9000'],
    },
    Nexus_7000: {
      roomName: 'Nexus_7000',
      info: `
            * Nexus 7000 modular switches deliver full NX-OS features and open-source programmable tools for software-defined deployments.
            * They provide high-density 10, 40, and 100 Gigabit Ethernet with application awareness, high programmability, and performance analytics.`,
      img: 'nexus_7000.jpg',
      adjacentRooms: [
        'Nexus_7718',
        'Nexus_7710',
        'Nexus_7706',
        'Switches',
        'Product_Catalog',
      ],
    },
    Nexus_7718: {
      roomName: 'Nexus_7718',
      info: `
            * Cisco Nexus 7718 switches deliver the highest capacity 10,40 and 100 Gigabit Ethernet ports in the industry.
            * It offers more than 83 terabits per second (Tbps) of overall switching capacity with up to 768 native 10-Gbps ports, 384 40-Gbps ports and up to 192 100-Gbps ports.
            * This high system capacity is used designed to meet the scale requirements of the largest cloud environments.`,
      img: 'nexus_7718.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Nexus_7000'],
    },
    Nexus_7710: {
      roomName: 'Nexus_7710',
      info: `
            * Cisco Nexus 7710 switches delivers up to 384 native 10-Gbps ports, 192 40-Gbps ports and up to 96 100-Gbps ports.
            * It offers more than 41 terabits per second (Tbps) of overall switching capacity.`,
      img: 'nexus_7710.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Nexus_7000'],
    },
    Nexus_7706: {
      roomName: 'Nexus_7706',
      info: `
            * Cisco Nexus 7706 switches delivers up to 192 X native 10-Gbps ports, 96X40 40-Gbps ports and up to 48 X 100-Gbps ports.
            * It offers more than 21 terabits per second (Tbps) of overall switching capacity.`,
      img: 'nexus_7706.jpg',
      adjacentRooms: ['Switches', 'Product_Catalog', 'Nexus_7000'],
    },
  };
  