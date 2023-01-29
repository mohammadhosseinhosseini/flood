import React from 'react'
import { Modal, Typography, Box } from '@mui/material'
import { useWindowSize } from '@react-hook/window-size'

import Flooded_Street_2014_Flood from './images/Flooded Street 2014 Flood.png'
import Flooded_Cellar_Muenster from './images/Flooded Cellar Muenster.png'
import Screen_Shot from './images/Screen Shot 2023-01-28 at 9.41.21 PM.png'
import Flood_Depths_About_Page_Image from './images/Flood Depths About Page Image.png'
import Potentially_Affected_Buildings_Legend_Photo from './images/Potentially Affected Buildings Legend Photo.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height: '80%',
    overflow: 'hidden',
    overflowY: 'scroll',
}

const About = ({ filters, changeFilters }) => {
    const [width, height] = useWindowSize()
    const isMobile = width < 900

    const handleClose = () => {
        changeFilters(false, 'showAbout')
    }
    return (
        <>
            {filters.showAbout && (
                <Modal
                    open={filters.showAbout}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                    style={{}}
                >
                    <Box
                        sx={{
                            ...style,
                            ...{
                                padding: isMobile ? '10px 20px' : '30px 40px',
                                width: isMobile ? '90%' : '75%',
                            },
                        }}
                    >
                        <h1 style={{ fontSize: '32px' }}>
                            The Münster Flood Mapping Project
                        </h1>

                        <p>
                            <h2 style={{ fontSize: '24px' }}> Introduction </h2>

                            <Box>
                                <p style={{ margin: 0 }}>
                                    {' '}
                                    <p>
                                        On 28 July, 2014, the city of Münster
                                        experienced a severe storm that resulted
                                        in widespread flooding, causing the
                                        death of two individuals and
                                        overwhelming emergency services. The
                                        flood posed numerous challenges, and
                                        demonstrated the importance of flood
                                        risk awareness and preparedness as a
                                        tool for keeping citizens safe during
                                        future flood events.
                                    </p>
                                    <p>
                                        During the storm, the fire brigade
                                        received over 13,000 calls for service,
                                        but only 15 percent of those calls were
                                        answered due to the severity of the
                                        flood. The city's sewer and drainage
                                        systems were quickly overwhelmed and
                                        flooded the streets, making it dangerous
                                        for emergency responders and civilians
                                        to travel. At one point, the mobile
                                        phone network collapsed, making it
                                        difficult for people to call for help.
                                    </p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'left',
                                        }}
                                    >
                                        <img
                                            src={Flooded_Street_2014_Flood}
                                            style={{
                                                width: '40%',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                border: '2px solid gray',
                                                borderRadius: '5px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                marginTop: '10px',
                                                fontWeight: 'bold',
                                                width: '40%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {' '}
                                            Flooded streets resulted in
                                            dangerous travel conditions{' '}
                                        </p>
                                    </div>
                                    <p>
                                        For those who sought refuge at home, the
                                        flood still posed a huge safety risk.
                                        Thousands of cellars flooded, and a 76
                                        year-old man tragically passed away from
                                        drowning at home. Several people were
                                        also reported missing. The fire brigade
                                        was not adequately staffed to handle the
                                        situation, even with the assistance of
                                        volunteer firefighters, disaster relief,
                                        Technical Aid, helpers, and auxiliary
                                        workers.
                                    </p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'left',
                                        }}
                                    >
                                        <img
                                            src={Flooded_Cellar_Muenster}
                                            style={{
                                                width: '40%',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                border: '2px solid gray',
                                                borderRadius: '5px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                marginTop: '10px',
                                                fontWeight: 'bold',
                                                width: '40%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {' '}
                                            Flooded cellars pose a significant
                                            safety risk{' '}
                                        </p>
                                    </div>
                                    <p>
                                        The next day, thousands of cellars and
                                        houses were reported to be underwater.
                                        Public buildings such as schools and
                                        government offices were also damaged in
                                        the flood. To coordinate disaster relief
                                        efforts, community members created
                                        emergency assistance groups on social
                                        media platforms (e.g., Facebook and
                                        Twitter). Many volunteers worked
                                        alongside the fire brigade to help pump
                                        water out of buildings, clear drainage
                                        systems, and remove bulky, damaged items
                                        from homes.
                                    </p>
                                    <p>
                                        Altough the flood was nearly a decade
                                        ago, the extent of the disaster
                                        demonstrates the importance of educating
                                        citizens about flood risk, safety, and
                                        ways to reduce the cost of damage after
                                        a flood event. As such, we developed the
                                        Münster Flood Mapping Project as a
                                        user-friendly, publically accessible
                                        tool to help achieve this goal. This
                                        tool presents three potential flood
                                        scenarios, and allows users to better
                                        understand which areas are likely to
                                        flood during a future flood event. We
                                        use open-source flood data from the
                                        Federal Institute of Hydrology's (BfG)
                                        Geoportal, and aim to provide
                                        community-specific knowledge by allowing
                                        users to study flood risk at multiple
                                        scales.
                                    </p>
                                </p>
                            </Box>
                        </p>

                        <p>
                            <h2 style={{ fontSize: '24px' }}>
                                {' '}
                                How to use this map:{' '}
                            </h2>

                            <Box>
                                <p>
                                    This map uses flood data prepared by the
                                    Federal Insitute of Hydrology (BfG) to meet
                                    the requirements of the 2007 EU Floods
                                    Directive. Every six years, all EU countries
                                    are required to create and update flood
                                    hazard and flood risk maps in all areas
                                    where significant flooding could take place.
                                    This project uses data prepared for the
                                    2016-2021 map cycle, and represents
                                    potential flooding scenarios throughout
                                    Münster. As a disclaimer, there is no
                                    guarantee that a flood event will occur
                                    within the given cycle.
                                    <p>
                                        Relevant terms and definitions for the
                                        map are provided below.
                                    </p>
                                </p>
                            </Box>
                        </p>

                        <p>
                            <h2 style={{ fontSize: '24px' }}>
                                Flood Hazard Scenarios{' '}
                            </h2>
                            <Box>
                                <ul>
                                    <li>
                                        <b>High probability:</b> flooding occurs
                                        every 10 to 20 years on average (e.g.,
                                        relatively frequently){' '}
                                    </li>
                                    <li>
                                        <b>Medium probability:</b> flood occurs
                                        every 100 years on average{' '}
                                    </li>
                                    <li>
                                        <b>Low probability:</b> flood occurs
                                        less freqeuntly than every 100
                                        years(e.g., rarely). Such floods are
                                        known as "millennium floods", and can
                                        result in catastrophic consequences if
                                        not adequately addressed.{' '}
                                    </li>
                                </ul>
                            </Box>
                            <img
                                src={Screen_Shot}
                                alt='Flood Map'
                                style={{
                                    width: '30%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    border: '2px solid gray',
                                    borderRadius: '5px',
                                    display: 'inline-block',
                                }}
                            />
                            <p></p>

                            <p>
                                <h2 style={{ fontSize: '24px' }}>
                                    Flood Depths{' '}
                                </h2>
                                <Box>
                                    <p style={{ margin: 0 }}>
                                        The blue-colored areas on the map
                                        represent potential flood depths during
                                        a low, medium, or high probability flood
                                        event. Darker shades of blue correspond
                                        to higher water depths.
                                    </p>
                                </Box>
                                <p></p>
                                <img
                                    src={Flood_Depths_About_Page_Image}
                                    alt='Flood Legend'
                                    style={{
                                        width: '30%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        border: '2px solid gray',
                                        borderRadius: '5px',
                                        display: 'inline-block',
                                    }}
                                />
                                <p></p>
                            </p>

                            <p>
                                <h2 style={{ fontSize: '24px' }}>
                                    {' '}
                                    Potentially Affected Buildings{' '}
                                </h2>
                                <Box>
                                    <p style={{ margin: 0 }}>
                                        {' '}
                                        This layer shows buildings that would
                                        potentially be affected during a low,
                                        medium, or high probability flood event.
                                        Users can adjust the transparency of the
                                        buildings to understand whether a
                                        specific building or property would be
                                        at-risk during a flood event.
                                    </p>
                                </Box>
                                <p></p>
                                <img
                                    src={
                                        Potentially_Affected_Buildings_Legend_Photo
                                    }
                                    alt='Flood Legend'
                                    style={{
                                        width: '30%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        border: '2px solid gray',
                                        borderRadius: '5px',
                                        display: 'inline-block',
                                    }}
                                />
                            </p>

                            <h2 style={{ fontSize: '24px' }}> References </h2>
                            <Box>
                                <div>
                                    <p>
                                        Bundesanstalt für Gewässerkunde. (n.d.).
                                        Geoportal der BfG. Geoportal der
                                        Bundesanstalt für Gewässerkunde.
                                        Retrieved January 29, 2023, from
                                        <br />
                                        <a href='https://geoportal.bafg.de/ggina-portal/'>
                                            https://geoportal.bafg.de/ggina-portal/
                                        </a>
                                    </p>
                                    <p>
                                        European Commission. (n.d.). Floods.
                                        European Commission. Retrieved January
                                        29, 2023, from
                                        <br />
                                        <a href='https://environment.ec.europa.eu/topics/water/floods_en'>
                                            https://environment.ec.europa.eu/topics/water/floods_en
                                        </a>
                                    </p>
                                    <p>
                                        Ministerium für Klimaschutz, Umwelt,
                                        Landwirtschaft, Naturschutz und
                                        Verbraucherschutz, Ref. IV.6. (n.d.).
                                        Hochwassergefahrenkarten /
                                        Hochwasserrisikokarten. Flussgebiete
                                        NRW. Retrieved January 29, 2023, from
                                        <br />
                                        <a href='https://www.flussgebiete.nrw.de/en/system/files/atoms/files/lesehilfe_hwrmrl_hwgk_0.pdf'>
                                            https://www.flussgebiete.nrw.de/en/system/files/atoms/files/lesehilfe_hwrmrl_hwgk_0.pdf
                                        </a>
                                    </p>
                                    <p>
                                        WDR. (2022). Heimatflimmern. Retrieved
                                        January 29, 2023, from
                                        <br />
                                        <a href='https://www.youtube.com/watch?v=6YZdb0NIuDs.-Reading'>
                                            https://www.youtube.com/watch?v=6YZdb0NIuDs.-Reading
                                        </a>
                                    </p>
                                </div>
                            </Box>
                        </p>
                    </Box>
                </Modal>
            )}
        </>
    )
}

export default About
