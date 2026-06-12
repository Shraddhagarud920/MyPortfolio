package com.portfolio.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.api.entity.Skill;
import com.portfolio.api.service.SkillService;

@RestController
@RequestMapping("/api/skill")
@CrossOrigin(origins = "*")
public class SkillController {
	@Autowired
	private SkillService skillService;
	
	@GetMapping
	public List<Skill> getSkillDetails(){
		return skillService.getAllSkills();
	}

}
