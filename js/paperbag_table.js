var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Ii4utQR9v4GYy2NOSBY_qUtMefyrPanh8m2ICiBdHQo/edit?usp=sharing'

function init() {
    Tabletop.init({ 
		key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true 
	});
}

function showInfo(data, tabletop) {

	console.log(data);

	var table = new Tabulator("#paperbag_table", {
    	//responsiveLayout:"true",
	virtualDom:"false",
	virtualDomBuffer:"40",
    	responsiveLayout:"collapse",
    	responsiveLayoutCollapseStartOpen:false,
    	responsiveLayoutCollapseFormatter:function(data){
            var list = document.createElement("ul");

            for(var key in data){
		let item = document.createElement("li");                
		//item.innerHTML = "<strong>" + key + "</strong> - " + data[key];
		item.innerHTML = "<strong>" + key + "</strong>" + "<pre><small>" + data[key] + "</small></pre>";
		list.appendChild(item);
            }

            return Object.keys(data).length ? list : "";
	},

	    height:"100%",
     	    layout:"fitColumns",
	    tooltips:true,
	    addRowPos:"top",
	    history:true,
	    pagination:false,
	    movableColumns:true,
	    resizableRows:true,
	    data:data,
	    initialSort: [
		{column:"name", dir:"asc"},
	    ],
	    columns:[
		{formatter:"responsiveCollapse", width:30, minWidth:30, align:"center", headerSort:false},
		{title:"Year", field:"Date of study", formatter:"textarea", widthGrow:1},
		{title:"Location", field:"Locale of Study", formatter:"textarea", widthGrow:1},
		{title:"Type", field:"Type of Fee", formatter:"textarea", widthGrow:1},
		{title:"Summary", field:"Summary and Key Stats", formatter:"textarea",  widthGrow:3, minWidth:500},
		{title:"Study Author", field:"Study Author", widthGrow:2, formatter:"link", formatterParams:{
    labelField:"Study Author",
    urlField:"Link to Study or Official Website",
    target:"_blank",}},
		//{title:"Date", field:"Date that ordinance came into effect", formatter:"textarea", width:240},
		//{title:"Study Author", field:"Type of Study Author", formatter:"textarea", width:300},
		{title:"Study Methodology", field:"Study Methodology", formatter:"textarea", minWidth:2000},
		//{title:"Key Manipulation", field:"Key Manipulation", formatter:"textarea", width:300},
		{title:"Key Stats", field:"Key Stats", formatter:"textarea", minWidth:2000},
		{title:"Destination of fee", field:"Destination of fee", formatter:"textarea", minWidth:2000},
		{title:"&#162;", field:"Amount of Fee", formatter:"textarea", minWidth:2000},
		//{title:"Link to Study", field:"Link to Study or Official Website", formatter:"textarea", minWidth:2000},
		{title:"Link to Law (if available)", field:"Link to Text of Law", minWidth:2000, formatter:"link", formatterParams:{
    labelField:"Link to Text of Law",
    urlField:"Link to Text of Law",
    target:"_blank",}},
		//{title:"Other Notes", field:"Other Notes", formatter:"textarea", width:300},
	    ]
	});
}

window.addEventListener('DOMContentLoaded', init);
