package com.portfolio.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.api.entity.Project;
import com.portfolio.api.service.ProjectService;

@RestController
@RequestMapping("/api/project")
@CrossOrigin(origins = "*")
public class ProjectController {
	@Autowired
	private ProjectService projectService;
	
	@GetMapping
	 public List<Project> getProjectDetais(){
		return projectService.getAllProjects();
	}

}
