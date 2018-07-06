jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    var words = [
      {text: "C", weight: 6},
      {text: "C++", weight: 5},
      {text: "Java", weight: 9},
      {text: "JEE", weight: 4},
      {text: "C#", weight: 6},
      {text: "Scheme", weight: 3},
      {text: "Swift", weight: 7},
      {text: "Scala", weight: 5},
      {text: "HTML", weight: 5},
      {text: "CSS", weight: 5},
      {text: "PHP", weight: 6},
      {text: "JavaScript", weight: 7},
      {text: "Bootstrap", weight: 4},
      {text: "ASP.NET", weight: 5},
      {text: "TCP/IP", weight: 5},
      {text: "Socket en C/Java", weight: 4},
      {text: "SSL/TLS", weight: 9},
      {text: "Apache", weight: 6},
      {text: "Oracle", weight: 6},
      {text: "SQLite", weight: 6},
      {text: "RethinkDB", weight: 4},
      {text: "Data Mining", weight: 6},
      {text: "Ubuntu", weight: 7},
      {text: "Kali", weight: 9},
      {text: "Windows", weight: 7},
      {text: "Git", weight: 8},
      {text: "Maven", weight: 4},
      {text: "Docker", weight: 6},
      {text: "Jenkins", weight: 5},
      {text: "Hadoop", weight: 5},
      {text: "Office", weight: 3},
      {text: "Snort", weight: 5},
      {text: "Suricata", weight: 7},
      {text: "Metasploit", weight: 8},
      {text: "Android", weight: 6},
      {text: "Logstash", weight: 8},
      {text: "Kibana", weight: 8},
      {text: "Elasticsearch", weight: 8},
      {text: "Nessus", weight: 9},
      {text: "Nmap", weight: 7},
      {text: "SIEM", weight: 9},
      {text: "Elastalert", weight: 7},
      {text: "Pare-feux", weight: 8},
      {text: "OpenFlow", weight: 6},
      {text: "VPN", weight: 6},
      {text: "Python", weight: 9},
      {text: "PowerShell", weight: 9},
      {text: "VMware ESX", weight: 7},
      {text: "BroIDS", weight: 6},
      {text: "SmartCard", weight: 3},
      {text: "Ettercap", weight: 5},
      {text: "Searchguard", weight: 7},
      {text: "Sysmon", weight: 8},
      {text: "TheHive", weight: 7},
      {text: "Cortex", weight: 7},
      {text: "Cortex", weight: 9},
      {text: "Wireshark", weight: 6}
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
