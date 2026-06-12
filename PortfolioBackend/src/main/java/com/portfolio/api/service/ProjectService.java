package com.portfolio.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.portfolio.api.entity.Project;
import com.portfolio.api.repository.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository projectRepository;
	public List<Project> getAllProjects() {
		return projectRepository.findAll();
	}


}
