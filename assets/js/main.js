jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    var words = [
      {text: "C", weight: 9},
      {text: "C++", weight: 8},
      {text: "Java", weight: 9},
      {text: "JEE", weight: 5},
      {text: "C#", weight: 8},
      {text: "Scheme", weight: 4},
      {text: "Swift", weight: 8},
      {text: "Scala", weight: 6},
      {text: "HTML", weight: 6},
      {text: "CSS", weight: 6},
      {text: "PHP", weight: 7},
      {text: "JavaScript", weight: 9},
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
      {text: "Snort", weight: 7},
      {text: "Metasploit", weight: 8},
      {text: "Android", weight: 6},
      {text: "Logstash", weight: 5},
      {text: "Kibana", weight: 6},
      {text: "Elasticsearch", weight: 8},
      {text: "Nessus", weight: 6},
      {text: "Nmap", weight: 7},
      {text: "SIEM", weight: 9},
      {text: "Pare-feux", weight: 8},
      {text: "OpenFlow", weight: 6},
      {text: "VPN", weight: 6},
      {text: "Python", weight: 8},
      {text: "GNU Radio", weight: 3},
      {text: "Hadoop", weight: 6},
      {text: "VMware ESX", weight: 7},
      {text: "BroIDS", weight: 6},
      {text: "SmartCard", weight: 5},
      {text: "Ettercap", weight: 6},
      {text: "Wireshark", weight: 7}
      /* ... */
    ];
    $('#programming').jQCloud(words, {
  height: 500,
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
