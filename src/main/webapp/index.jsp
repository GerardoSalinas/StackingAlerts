<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta name="author" content="gasalinas@unah.hn" />
		<meta name="version" content="0.1.0" />
		<meta name="date" content="2024/04/05" />
		<meta charset="UTF-8">
		<title>Stacking alerts</title>
		<link rel="stylesheet" href="./assets/css/style.css" />
		<link rel="stylesheet" href="./assets/css/bootstrap.min.css"/>
	</head>
	<body>
		<div class="container text-center">
		  <div class="row justify-content-evenly">
		    <div data-column="col1" class="col-md-3 shadow p-3 mb-5 bg-body-tertiary rounded">
		       <!-- <div class="alert alert-primary alert-dismissible fade show" role="alert">A simple primary alert—check it out!
			       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>		       
		       </div> -->
		       <button type="button" class="btn btn-success col-12">Success</button>
		       
		    </div>
		    <div data-column="col2" class="col-md-3 shadow p-3 mb-5 bg-body-tertiary rounded">
		      	<!-- <div class="alert alert-primary alert-dismissible fade show" role="alert">A simple primary alert—check it out!
			       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>		       
		       </div> -->
		       <button type="button" class="btn btn-success col-12">Success</button>
		    </div>
		    <div data-column="col3" class="col-md-3 shadow p-3 mb-5 bg-body-tertiary rounded">
				<!-- <div class="alert alert-primary alert-dismissible fade show" role="alert">A simple primary alert—check it out!
			       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>		       
		       </div> -->
		       <button type="button" class="btn btn-success col-12">Success</button>
				
		    </div>
		  </div>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
		<script src="./assets/js/Action.js"></script>
		<script src="./assets/js/main.js"></script>
	</body>
</html>