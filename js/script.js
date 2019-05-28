$( ".yo img" ).hover(
    function() {
        $( this ).css( "overflow", "hidden" );
        $( this ).css( "transition", "transform .5s ease" );
        $( this ).css( "transform", "scale(1.5)" );

    }, function() {
        $( this ).css( "overflow", "hidden" );
        $( this ).css( "transition", "transform .5s ease" );
        $( this ).css( "transform", "scale(1)" );

    }
);

var cnt = 2;
$("#boutonChangerTout").click(function () {
    if($('#boutonChangerTout').text().indexOf('Voir les ours blancs') == 0){
        $('.marginBas').css('margin-top', '15px');
        $('#boutonChangerTout').attr("class", "btn btn-dark");
        $('#boutonChangerTout').html("Voir les ours noirs");
        $('#container1').attr("class", "container-fluid h-100");
        $('#container2').attr("class", "container-fluid zero bg-dark");
        $('#container3').attr("class", "container-fluid zero");
        $('#container4').attr("class", "container-fluid zero bg-dark");
        $('footer').attr("class", "");
        $('#text1').html("L'ours blanc est une espèce vivant autour du pôle nord, au bord de l'océan Arctique, dont l'habitat se limite quasiment à la banquise. Le point le plus méridional de leur habitat se situe dans la baie James au Canada. Bien que les effectifs décroissent au nord de 88° de latitude, on peut en rencontrer dans tout l'Arctique.");
        $('#text1').attr("class", "white");
        $('#titre1').attr("class", "white");
        $('#ours1').attr("src", "img/blanc1.jpg");
        $('#text2').html("Les ours blancs sont des animaux solitaires. Excellents nageurs grâce à leur couche de graisse, ils peuvent être vus en pleine mer à des kilomètres de toute terre. Ils nagent en utilisant leurs pattes avant pour se propulser et leurs pattes arrière comme gouvernail. Le pelage se gonfle d'air pour augmenter la flottaison. Sous l'eau, les yeux restent ouverts mais les narines se ferment, ils peuvent ainsi retenir leur respiration jusqu'à deux minutes.");
        $('#text2').attr("class", "");
        $('#titre2').attr("class", "");
        $('#ours2').attr("src", "img/blanc2.jpg");
        $('#text3').html("L'ours blanc est le plus carnivore des ursidés. Deux espèces de phoques constituent l'essentiel de son régime : Phoca hispida, qui atteint 60 kg, l'espèce la plus nombreuse en Arctique et formant sa proie principale, et Erignathus barbatus, pouvant dépasser 400 kg. ");
        $('#text3').attr("class", "white");
        $('#titre3').attr("class", "white");
        $('#ours3').attr("src", "img/blanc3.jpg");
        $('#presentation').html("Ours Blancs");
        $('#presentation').attr("class", "");
        $('.fin').attr("class", "")
        cnt++;
    }
    else if($('#boutonChangerTout').text().indexOf('Voir les ours noirs') == 0){
        $('.marginBas').css('margin-top', '0px');
        $('#boutonChangerTout').attr("class", "btn btn-light");
        $('#boutonChangerTout').html("Voir les ours blancs");
        $('#container1').attr("class", "container-fluid h-100 bg-dark");
        $('#container2').attr("class", "container-fluid zero");
        $('#container3').attr("class", "container-fluid zero bg-dark");
        $('#container4').attr("class", "container-fluid zero");
        $('footer').attr("class", "bg-dark");
        $('#text1').html("L’Ours noir occupe un espace compris entre les régions septentrionales de l’Alaska et le Mexique. Il est réparti sur seulement trois pays le Mexique, les Etats-Unis et le Canada alors qu'il comporte deux fois plus d'individus que toutes les autres espèces d'ours connues.");
        $('#text1').attr("class", "");
        $('#titre1').attr("class", "");
        $('#ours1').attr("src", "img/noir1.jpg");
        $('#text2').html("L’ours noir est la plupart du temps un animal solitaire sauf pendant la période de rut et dans la relation qu’entretient la mère avec ses oursons. Les ours peuvent se rassembler occasionnellement dans les zones d’abondance alimentaire. Ils sortent généralement le jour, sauf dans les secteurs où il y a beaucoup d’humains : ils préfèrent alors la nuit pour les éviter.");
        $('#text2').attr("class", "white");
        $('#titre2').attr("class", "white");
        $('#ours2').attr("src", "img/noir2.jpg");
        $('#text3').html("Les ours noirs sont omnivores : les végétaux représentent 75 % de leur alimentation6. Ils mangent des graminées, des herbes, des fruits (noisettes, noix, baies, pignons, fruits d’églantiers, pommes …), des glands et des faînes11,9,1. Il mange également, de temps en temps, des insectes, des larves, de poissons et de charognes. Il lui arrive de chasser des mammifères1. Ils sont opportunistes et mangent parfois dans des poubelles et d'autres restes de nourriture laissés dans des campements1.");
        $('#text3').attr("class", "");
        $('#titre3').attr("class", "");
        $('#ours3').attr("src", "img/noir3.jpg");
        $('#presentation').html("Ours Noirs");
        $('#presentation').attr("class", "white");
        $('.fin').attr("class", "white")
    }
})

AOS.init();

