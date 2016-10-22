jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    var words = [
      {text: "C", weight: 10},
      {text: "C++", weight: 9},
      {text: "Java", weight: 10},
      {text: "JEE", weight: 5},
      {text: "C#", weight: 8},
      {text: "Scheme", weight: 4},
      {text: "Swift", weight: 8},
      {text: "Scala", weight: 6},
      {text: "HTML", weight: 6},
      {text: "CSS", weight: 6},
      {text: "PHP", weight: 8},
      {text: "JavaScript", weight: 9},
      {text: "AngularJS", weight: 5},
      {text: "Bootstrap", weight: 5},
      {text: "ASP.NET", weight: 6},
      {text: "TCP/IP", weight: 4},
      {text: "Socket en C/Java", weight: 4},
      {text: "SSL/TLS", weight: 9},
      {text: "Apache", weight: 6},
      {text: "Oracle", weight: 7},
      {text: "SQLite", weight: 7},
      {text: "RethinkDB", weight: 6},
      {text: "UML", weight: 5},
      {text: "Data Mining", weight: 6},
      {text: "Entrepot de données", weight: 3},
      {text: "Ubuntu", weight: 6},
      {text: "Kali", weight: 8},
      {text: "Windows", weight: 7},
      {text: "IntelliJ", weight: 7},
      {text: "Visual Studio", weight: 6},
      {text: "Git", weight: 8},
      {text: "Maven", weight: 4},
      {text: "Docker", weight: 6},
      {text: "Jenkins", weight: 5},
      {text: "Hadoop", weight: 5},
      {text: "Xcode", weight: 4},
      {text: "Office", weight: 3},
      {text: "Snort", weight: 6},
      {text: "Metasploit", weight: 7}
      /* ... */
    ];
    $('#programming').jQCloud(words, {
  height: 300,
  autoResize: true //Responsive
});
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });
    });



});
