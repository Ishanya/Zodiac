package com.ntl.movieapp.login.movies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntl.movieapp.login.movies.dao.CredentialsDao;
import com.ntl.movieapp.login.movies.dao.ProfileDao;
import com.ntl.movieapp.login.movies.model.CredentialsBean;
import com.ntl.movieapp.login.movies.model.ProfileBean;




@Service
public class ProfileService {

	public ProfileService() {
		super();
	}
	
	
	@Autowired
	ProfileDao profileDao;
	@Autowired
	CredentialsDao credDao;
	
	
	public ProfileBean register(ProfileBean profileBean) {
		CredentialsBean credentialsBean=new CredentialsBean();

		String charf = profileBean.getFirstName().substring(0,2);
		Double ranNum = Math.random()*10000;
		int id= (int) Math.round(ranNum);
				
		String uniqueId=charf+id;
		profileBean.setUserId(uniqueId);
		credentialsBean.setUserID(profileBean.getUserId());
		credentialsBean.setLoginStatus(0);
		credentialsBean.setPassword(profileBean.getPassword());
		credentialsBean.setAuthQuestion(profileBean.getAuthQuestion());
		credentialsBean.setAuthAnswer(profileBean.getAuthAnswer());
		profileBean.setPassword(null);
		profileBean.setAuthQuestion(null);
		profileBean.setAuthAnswer(null);
		credDao.save(credentialsBean);
		profileDao.save(profileBean);
		
		
		return profileBean;
	}

	

}
