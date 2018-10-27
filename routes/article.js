const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.render('article', {
    title: 'Article Header',
    header: 'Article Header',
    author: 'Petar Peychev',
    articleImage: '/images/article-image.jpg',
    article: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perspiciatis quae, excepturi, minima, hic
        nihil dolore officia animi officiis perferendis reprehenderit aperiam molestiae quas sit consequatur
        labore. Doloremque eum consequatur neque blanditiis odio assumenda corporis adipisci iure. Doloribus,
        incidunt perspiciatis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet asperiores quae excepturi commodi quidem
        maxime, placeat consequatur adipisci facere, omnis minima vel! Labore harum, minus magni maxime nihil
        neque rem reiciendis dicta numquam similique ipsa voluptatem aliquid eligendi sit impedit natus, molestias
        minima nostrum quam? A autem nisi, hic tempora obcaecati voluptates aspernatur deleniti ab molestiae
        atque optio consequatur alias delectus error non voluptatibus adipisci sunt recusandae? Voluptatum, repellat.</p>
    <h2>Secondary Header</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum obcaecati cupiditate dicta illum
        est sapiente laudantium ipsam, qui, possimus ratione fugit sunt veritatis, fugiat omnis! Tenetur animi
        accusamus voluptatum, explicabo consequatur quidem architecto voluptates quia neque laudantium nulla
        accusantium omnis nam. Aut omnis, obcaecati quidem praesentium doloremque assumenda. Adipisci, iusto,
        possimus distinctio sequi harum cupiditate sit, cum voluptatibus nihil autem quam corporis! Facere delectus
        aliquid laborum incidunt. Dicta, ratione eaque. Ipsa asperiores, distinctio, placeat consequuntur ducimus
        est commodi vero modi consectetur fugit tempore obcaecati eius, facere facilis natus. Odit.</p>
    <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, totam.</li>
        <li>Veritatis maiores sapiente voluptatum ab dolores facere expedita ex nemo.</li>
        <li>Ipsum, quas eaque. Magni, pariatur cupiditate blanditiis voluptatem cum magnam.</li>
        <li>Voluptate ea quia minima veniam, accusamus ullam corporis totam voluptatum.</li>
        <li>Iste ducimus est repellat odio facilis dicta eos quis nesciunt!</li>
        <li>Ex facere, nobis blanditiis amet doloribus harum recusandae cumque rem.</li>
        <li>Consequuntur excepturi cumque a reiciendis veniam eum et est obcaecati.</li>
        <li>Suscipit magnam ad recusandae molestias amet facilis corrupti fugit exercitationem?</li>
        <li>Voluptatem dignissimos tempora quas voluptates. Dolorum repudiandae quidem vitae odio.</li>
        <li>Ipsam doloribus consectetur ad laborum porro rerum nemo perspiciatis saepe.</li>
    </ul>
    <h2>Secondary Header</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam dolor iusto magnam. Sequi autem magnam
        voluptatum voluptas, inventore ex eius et suscipit eum impedit quos odit accusamus. Dolore dicta veniam
        rem mollitia consectetur enim, odit provident, officia quam obcaecati amet dolor tempore magni dolores
        adipisci odio quaerat corporis veritatis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem quia numquam repellendus. Placeat
        ad quibusdam, incidunt repellendus, quam excepturi velit suscipit temporibus, dolorum praesentium minus.
        Voluptate minima quae ipsum reiciendis sit non sequi labore similique dolor sint provident, iure magni
        culpa placeat quia soluta, iusto dolorum quam esse officiis quibusdam aliquid? Consequatur provident
        eaque ipsum quos voluptatem omnis et dolor inventore dolores cum, repellat non eos facere suscipit vitae.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo blanditiis! Natus dolore, animi,
        ea eveniet officiis quibusdam minima doloremque placeat quidem eius molestiae facere tenetur voluptates
        exercitationem aspernatur cupiditate excepturi! Animi quisquam asperiores dolore porro molestias maxime,
        numquam dolorum?</p>
`
  });
});

module.exports = router;
