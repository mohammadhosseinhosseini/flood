import React from 'react'
import { Modal, Typography, Box } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 8,
    height: '80%',
    overflow: 'hidden',
    overflowY: 'scroll',
}

const About = ({ filters, changeFilters }) => {
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
                    <Box sx={style}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem eos similique eum voluptates
                            mollitia porro sunt ut praesentium quidem expedita
                            commodi excepturi, sit molestiae labore totam
                            ducimus soluta quibusdam placeat. Delectus,
                            asperiores. Nam, saepe commodi laborum asperiores
                            ipsum mollitia debitis eos aliquam beatae alias
                            inventore blanditiis aspernatur eum sunt in eius
                            fugit corrupti aperiam doloremque minima numquam ut
                            deleniti! Sapiente nisi iusto modi officia esse odit
                            facere, debitis repellendus? Earum, quidem! Ut
                            nostrum, iste aspernatur labore, repellat eos vitae
                            quia magnam rerum maxime sunt perspiciatis
                            reprehenderit quo earum, accusantium sapiente qui
                            veniam a. Debitis, a? Reiciendis ex cum provident
                            nesciunt tenetur quasi, eius quisquam fuga earum
                            nisi. Excepturi cum itaque nobis, ullam sint dolor
                            accusantium exercitationem assumenda adipisci,
                            corporis possimus quis! Qui optio dolore doloremque
                            adipisci. Vel similique quibusdam iste ex at officia
                            ab vitae blanditiis odio facilis voluptates animi,
                            doloribus nulla distinctio inventore quia quas?
                            Tempore eaque molestiae veritatis obcaecati ratione
                            laudantium explicabo nulla, itaque dolorem minus
                            soluta atque animi voluptatibus eius modi reiciendis
                            non at officiis necessitatibus voluptas. Officiis
                            quam ea, incidunt fugit error ipsum beatae minus
                            quas consequuntur accusantium temporibus eaque,
                            pariatur natus asperiores minima odio iusto iure
                            vero voluptatem ut sed aliquid fugiat. Odio
                            voluptates, rerum explicabo qui nobis iste totam
                            tempora, consectetur labore omnis maxime inventore
                            ullam similique recusandae, veritatis molestiae
                            voluptatum repudiandae porro corrupti ducimus. Optio
                            officiis esse quasi sapiente commodi, quisquam eaque
                            exercitationem earum. Enim excepturi consequuntur
                            eaque quaerat quos, culpa pariatur! Incidunt aliquid
                            adipisci aspernatur voluptatum totam assumenda?
                            Vitae quasi molestias illo et fuga! Consectetur
                            laudantium numquam itaque ullam hic. Voluptatem,
                            culpa. Unde, impedit ratione autem beatae sapiente
                            quibusdam! Enim, consequatur cum! Quam voluptates et
                            non ut eveniet quasi error aspernatur, sapiente
                            molestias minima rerum iste voluptas iusto neque
                            voluptatibus iure omnis doloribus. Voluptates
                            quibusdam voluptatum sapiente nobis sit debitis
                            veniam, nesciunt enim architecto repudiandae
                            dignissimos molestias deserunt. Esse facilis, ut
                            culpa debitis reiciendis ipsum quam quia, iure quae
                            saepe impedit voluptatum minima animi explicabo
                            harum. Dicta et libero natus distinctio eveniet!
                            Iusto, doloremque corrupti asperiores cupiditate
                            ducimus dolore assumenda atque praesentium vitae,
                            tenetur omnis. Animi veritatis, dolor rerum saepe,
                            mollitia hic repudiandae sit facilis consequuntur
                            nulla ipsa similique debitis ratione fugiat cum
                            aperiam esse nemo suscipit? Qui sit, magni tenetur
                            ratione optio ullam adipisci dicta cum illum sed
                            labore earum maxime laboriosam ex similique est
                            saepe non dolor soluta quod? Officiis dolorum,
                            maiores sapiente quis neque rerum eaque odit quidem
                            mollitia soluta, totam repellat! Quidem tempore id
                            magnam, architecto pariatur deleniti. Magnam
                            molestiae necessitatibus expedita sapiente.
                            Excepturi ipsam optio natus suscipit eum ullam
                            maiores error sed quae corporis? Tempora,
                            perferendis recusandae optio labore velit rerum
                            debitis, porro quaerat odio illum dolorem assumenda.
                            Fuga quae iste eligendi explicabo eaque recusandae
                            modi nemo numquam nostrum cumque ullam dolores
                            aspernatur, ad dolore, voluptatem saepe natus ipsa
                            rerum exercitationem, minima labore temporibus velit
                            nesciunt omnis. Vero ea harum perferendis pariatur
                            atque optio nihil! Saepe rem quod, dolorum beatae
                            harum assumenda natus officia corrupti veritatis
                            unde eveniet maxime nostrum perspiciatis ratione
                            pariatur sit soluta consectetur non eius, nam optio
                            error et. Earum, est quos. Distinctio blanditiis
                            magnam, consectetur ipsa dolorem perspiciatis
                            quibusdam praesentium dolor sint repellat architecto
                            accusantium sequi placeat iure. Ad perspiciatis
                            veritatis doloribus consequuntur porro quod rem quia
                            nesciunt temporibus provident officia maiores quasi
                            nisi perferendis esse adipisci eaque, a, optio,
                            quidem delectus. Dicta, modi! Aliquid impedit
                            architecto quo tempora numquam fugiat cumque aperiam
                            eaque natus obcaecati, atque, voluptas adipisci sed
                            eveniet labore non quaerat error? Deserunt facilis
                            earum laborum nulla sunt! Harum laudantium eaque,
                            consequuntur beatae magni id fuga, vel, quae
                            repellat expedita dignissimos nostrum minima soluta
                            vero blanditiis atque voluptatibus sed saepe non
                            accusamus aliquid maiores quibusdam quod! Eius,
                            optio ex. Fugiat, atque amet quos similique
                            temporibus labore culpa quo obcaecati modi eaque
                            sequi soluta enim omnis cupiditate dolor, illo optio
                            dolores? Laboriosam adipisci quos repellat
                            voluptatibus fugit natus expedita, sunt quibusdam
                            nisi consectetur iure. Amet nostrum quaerat maxime
                            quidem, quae assumenda blanditiis eveniet cupiditate
                            eum hic doloremque vitae unde similique modi esse!
                            Rem nulla hic, qui illo dolor quis sed, blanditiis
                            eos quae minima ullam nihil voluptate delectus
                            quisquam corrupti numquam a. Assumenda asperiores
                            vero veritatis inventore culpa unde doloremque,
                            repellendus dignissimos commodi adipisci autem?
                            Corrupti harum doloribus molestiae inventore
                            dolorem! Architecto, fuga numquam inventore vero
                            totam eligendi esse saepe corrupti minus quasi,
                            corporis at sequi deleniti cum ducimus debitis, odit
                            error laboriosam aut a et accusamus eaque.
                            Perferendis omnis sunt ipsum expedita magnam,
                            obcaecati quasi itaque ipsa officia inventore
                            dignissimos ad voluptas quam reiciendis!
                            Perspiciatis non corporis rem magnam iure delectus
                            debitis optio facere nostrum. Similique eum aliquid
                            minus vel distinctio autem sint corporis totam
                            suscipit doloremque, itaque corrupti quis nobis
                            voluptates ratione nulla esse nisi et, nemo quasi
                            repellendus ullam. Voluptate ad deserunt sapiente?
                            Neque, nihil obcaecati aspernatur facere architecto
                            odit vitae maxime impedit eius at deleniti eaque
                            consequuntur est reiciendis aperiam. Accusamus
                            veniam quasi maxime officiis et? Consequatur
                            praesentium debitis dicta ut quam, neque aspernatur
                            repellendus at, accusantium, fugiat eos asperiores
                            amet eius ducimus aut corporis ab exercitationem
                            pariatur velit odit! Sint aliquid praesentium
                            provident quisquam aspernatur velit quas tempora,
                            inventore dicta dignissimos similique ex repellat
                            ratione architecto pariatur id ab unde rem obcaecati
                            facilis quibusdam est ut sapiente? Optio corporis
                            dignissimos nisi dolorem consequuntur eos dolor
                            distinctio sapiente magnam minus saepe ullam
                            suscipit, ea similique ducimus, tempore consectetur
                            vel minima recusandae est. Soluta obcaecati nam
                            harum, repellendus nisi facere quibusdam facilis
                            ipsa quasi delectus in sunt non voluptatibus porro
                            voluptates tempore iste sequi ratione. Quod tenetur
                            aspernatur atque veritatis, quos architecto nihil
                            aliquid reiciendis, dolore nisi ab natus at rerum
                            vel non, saepe dignissimos autem? Saepe eaque
                            dignissimos laboriosam rerum aspernatur! Aut itaque
                            ullam. Id, voluptates.
                        </p>
                    </Box>
                </Modal>
            )}
        </>
    )
}

export default About
