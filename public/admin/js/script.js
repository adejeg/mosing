var clickCount = 0;
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	if (clickCount == 0) {
	    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("main").style.marginLeft = "250px";
	    document.getElementById("main").style.width = "83%";
	    clickCount =+ 1; 
   	}else{
   		document.getElementById("mySidenav").style.width = "0px";
    	document.getElementById("main").style.marginLeft = "0px";
    	document.getElementById("main").style.width = "100%";
    	clickCount = 0;
   	}
}

function searchTable() {
	var input, filter, table, tr, td, i;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("songTable")
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1, 2];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}