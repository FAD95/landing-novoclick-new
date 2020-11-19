$(document).ready(function() {

    $(document.body).on('click', '.return-page-team', function() {
        $('.pop-my-menu-1').removeClass('pop-my-menu-active');
    });

    $('.more-team').on('click', function() {
        $('.popup-overlay-1').find('div').remove();
        $('.pop-my-menu-1').addClass('pop-my-menu-active');

        $('.popup-overlay-1').append(`
        <div class="row">
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip">
                        <div class="mainflip flip-0">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/Nataly Arias.png" alt="card image"></p>
                                        <h4 class="card-title">Nataly Arias</h4>
                                        <p class="card-text">Directora de Diseño</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Lider de diseño, creación de piezas gráficas para email, html, redes sociales, presentaciones y edición de video.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 



                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/Laura castañeda Prada.png" alt="card image"></p>
                                        <h4 class="card-title">Laura Castañeda Prada</h4>
                                        <p class="card-text">Directora de Contenidos</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Lider en desarrollo de contenidos textuales de Novoclick y campañas al aire de sus clientes finales, coordinación, ejecución e implementación de estrategias en redes sociales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/alejandro concha.png" alt="card image"></p>
                                        <h4 class="card-title">Alejandro Concha</h4>
                                        <p class="card-text">Director Creativo</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Especialista en ejecución de ideas y procesos de diseño creativo de campañas publicitarias con la finalidad de dar a conocer el producto/servicio de una manera atractiva para el target.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/Laureano silva.png" alt="card image"></p>
                                        <h4 class="card-title">Laureano Silva</h4>
                                        <p class="card-text">Revisor Fiscal</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Encargado del cumplimiento de leyes, estatutos sociales y decisiones de administración.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/Hanna_bolivar.jpeg" alt="card image"></p>
                                        <h4 class="card-title">Hanna Bolivar</h4>
                                        <p class="card-text">Directora de Publicidad</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Especialista en procesos creativos y de diseño para el cumplimiento de lanzamiento de campañas publicitarias de manera atractiva e influyente para el target al que se quiere llegar.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/tatiana murillo.png" alt="card image"></p>
                                        <h4 class="card-title">Tatiana Murillo</h4>
                                        <p class="card-text">Key Account Manager</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Experta en gestión consultiva de cuentas claves, enfocada en la estructura de estrategias y soluciones efectivas para los aliados de Novoclick.</p>

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
            </div>

            <div class="row">
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip">
                        <div class="mainflip flip-0">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/jonatan cubillos.png" alt="card image"></p>
                                        <h4 class="card-title">Jonatan Cubillos</h4>
                                        <p class="card-text">Analista de CRM</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Experto en análisis y segmentación de los clientes de Novo- click, analiza datos extraídos, gestiona las campañas de marketing y que se haga buen uso del CRM.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/leonardo rivera.png" alt="card image"></p>
                                        <h4 class="card-title">Leonardo Rivera</h4>
                                        <p class="card-text">Ingeniero Desarrollador</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Experiencia de alta calidad en el desarrollo de nuevas funciones en las aplicaciones de Novoclick.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/geovanny ardila.png" alt="card image"></p>
                                        <h4 class="card-title">Geovanny Ardila</h4>
                                        <p class="card-text">Representante España</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Líder en España en desarrollo de ventas, planeación e implementación de estrategias digitales.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/renzo palacios.png" alt="card image"></p>
                                        <h4 class="card-title">Renzo Palacios</h4>
                                        <p class="card-text">Diseñador Gráfico y Realizador Audiovisual.</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">16 años de experiencia en agencias de publicidad reconocidas, su especialidad es la dirección y producción de audiovisuales, la dirección de arte y la animación 2D.</p>

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/sandra_ortega.jpeg" alt="card image"></p>
                                        <h4 class="card-title">Sandra Liliana Ortega</h4>
                                        <p class="card-text">Administrativa</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Coordinadora administrativa y contable, amplio conocimiento en el sistema Helisa, causación de todos los soportes contables, cobro de cartera, liquidación de nómina, pagos parafiscales, comisiones, flujo de caja,
                                            facturación electrónica, servicio al cliente, información financiera, plataforma bancaria, pagos PSE</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ./Team member -->
                <!-- Team member -->
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="imgs/novoclick_team/raul_martinez.jpeg" alt="card image"></p>
                                        <h4 class="card-title">Raul Eduardo Martinez</h4>
                                        <p class="card-text">Contador Público</p>
                                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">Conoce más</h4>
                                        <p class="card-text">Encargado de conciliar cuentas, llevar contabilidad, verificación de proveedores, liquidación de impuestos</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contain-buttom-end return-page-team" style="padding: 10px;">
                    <button class="btn-end-team">Atras</button>
                </div>`)
    });
})