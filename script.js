document.addEventListener('DOMContentLoaded', function () {

    function noLarge() {
        if (window.innerWidth < 992) {
            document.getElementById("bodi").innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand pe-5">LOREM IPSUM</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                 </form>
                    <li class="nav-item pe-5">
                        <a class="nav-link active">Dolor</a>
                    </li>
                    <li class="nav-item pe-5">
                        <a class="nav-link">Sit</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Amet</a>
                    </li>
                    <div class="accordion bg-secondary" id="accordionExample">
        <div class="accordion-item bg-secondary">
            <div class="nav-item" id="headingOne">
                <li class="bg-secondary nav-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Opciones
            </li>
        </div>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="bg-secondary">
                        <div class="cositos container py-3 mb-1"><a href="#">Opción 1</a></div>
                        <div class="cositos container py-3 mb-1"><a href="#">Opción 2</a></div>
                        <div class="cositos container py-3 mb-1"><a href="#">Opción 3</a></div>
                        <div class="cositos container py-3 mb-1"><a href="#">Opción 4</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
                <div class="row my-3">
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores voluptates vel facere doloremque quisquam magni, eum tempora laboriosam. Magni sunt
                        voluptatibus quae eum harum quia.</div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, rem dolores perspiciatis enim obcaecati impedit nesciunt! Consequuntur nisi dolore,
                        accusantium aut vero perspiciatis ipsam dignissimos!</div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify bg-$gray-400">Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Voluptas, aperiam aliquid? Dignissimos asperiores repudiandae ipsa nesciunt
                        temporibus ex odio, perferendis deleniti cumque esse, dolorem culpa?.</div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, iusto sapiente suscipit
                        doloribus sed, cum voluptas veniam fuga officiis saepe vitae. Inventore, id nemo?
                    </div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eveniet nam. Fugit,
                        debitis! Nam, ab dolor. Assumenda voluptatibus dolor ullam deserunt explicabo debitis, earum
                        aperiam!
                    </div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, nemo fugit? Dolorem ea
                        quisquam, cumque dicta et accusamus porro dignissimos? Iure optio maiores cumque accusantium.
                    </div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem minus, mollitia omnis
                        illo eligendi suscipit rerum? Ullam consequatur veniam corrupti sit accusantium, at repellat?
                    </div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus excepturi
                        tempore sapiente natus, voluptatum odit libero. Animi voluptates non eum, fugiat perspiciatis
                        rerum eos?
                    </div>
                    <div class="texto col-md-6 col-sm-12 my-3 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto, voluptatum cumque. Facere, exercitationem in harum doloremque ducimus molestias earum
                        quidem eos suscipit rem saepe officia.</div>
                </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="script.js"></script>`;
        } else {
            document.getElementById("bodi").innerHTML = ` <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand pe-5">LOREM IPSUM</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item pe-5">
                        <a class="nav-link active">Dolor</a>
                    </li>
                    <li class="nav-item pe-5">
                        <a class="nav-link">Sit</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Amet</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row text-center py-5">
            <h3>Lorem ipsum...</h3>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        Asperiores voluptates vel facere doloremque quisquam magni
                    </div>
                    <div class="carousel-item">
                        Eveniet, rem dolores perspiciatis enim obcaecati impedit nesciunt!
                    </div>
                    <div class="carousel-item">
                        sit amet consectetur adipisicing elit
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3">
                <div class="cositos container py-3 mb-1"><a href="#">Opción 1</a></div>
                <div class="cositos container py-3 mb-1"><a href="#">Opción 2</a></div>
                <div class="cositos container py-3 mb-1"><a href="#">Opción 3</a></div>
                <div class="cositos container py-3 mb-1"><a href="#">Opción 4</a></div>
            </div>

            <div class="container col-lg-9" id="texto">
                <div class="row my-3">
                    <div class="texto col-lg-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores voluptates vel facere doloremque quisquam magni, eum tempora laboriosam. Magni sunt
                        voluptatibus quae eum harum quia.</div>
                    <div class="texto col-lg-4 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, rem dolores perspiciatis enim obcaecati impedit nesciunt! Consequuntur nisi dolore,
                        accusantium aut vero perspiciatis ipsam dignissimos!</div>
                    <div class="texto col-lg-4 text-justify bg-$gray-400">Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Voluptas, aperiam aliquid? Dignissimos asperiores repudiandae ipsa nesciunt
                        temporibus ex odio, perferendis deleniti cumque esse, dolorem culpa?.</div>
                </div>
                <div class="row my-3">
                    <div class="texto col-lg-4 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sequi, iusto sapiente suscipit
                        doloribus sed, cum voluptas veniam fuga officiis saepe vitae. Inventore, id nemo?
                    </div>
                    <div class="texto col-lg-4 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eveniet nam. Fugit,
                        debitis! Nam, ab dolor. Assumenda voluptatibus dolor ullam deserunt explicabo debitis, earum
                        aperiam!
                    </div>
                    <div class="texto col-lg-4 text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, nemo fugit? Dolorem ea
                        quisquam, cumque dicta et accusamus porro dignissimos? Iure optio maiores cumque accusantium.
                    </div>
                </div>
                <div class="row my-3">
                    <div class="texto col-lg-4 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem minus, mollitia omnis
                        illo eligendi suscipit rerum? Ullam consequatur veniam corrupti sit accusantium, at repellat?
                    </div>
                    <div class="texto col-lg-4 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus excepturi
                        tempore sapiente natus, voluptatum odit libero. Animi voluptates non eum, fugiat perspiciatis
                        rerum eos?
                    </div>
                    <div class="texto col-lg-4 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto, voluptatum cumque. Facere, exercitationem in harum doloremque ducimus molestias earum
                        quidem eos suscipit rem saepe officia.</div>
                </div>
            </div>
        </div>

    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="script.js"></script>`;
        }
    }
    noLarge();
    window.addEventListener("resize", noLarge);
});