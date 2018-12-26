package com.ntl.movieapp.login.movies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntl.movieapp.login.movies.dao.CredentialsDao;
import com.ntl.movieapp.login.movies.dao.ProfileDao;
import com.ntl.movieapp.login.movies.model.CredentialsBean;
import com.ntl.movieapp.login.movies.model.ProfileBean;




@Service
public class ProfileService {

	
	



	@Autowired
	ProfileDao profileDao;
	@Autowired
	CredentialsDao credDao;
	public ProfileService(ProfileDao profileDao, CredentialsDao credDao) {
		super();
		this.profileDao=profileDao;
		this.credDao=credDao;
	}
	
	
	public ProfileBean register(ProfileBean profileBean) {
		CredentialsBean credentialsBean=new CredentialsBean();
		String password=profileBean.getPassword();
		String authQuestion=profileBean.getAuthQuestion();
		String authAnswer=profileBean.getAuthAnswer();
		String charf = profileBean.getFirstName().substring(0,2);
		Double ranNum = Math.random()*10000;
		int id= (int) Math.round(ranNum);
				
		String uniqueId=charf+id;
		profileBean.setUserId(uniqueId);
		credentialsBean.setUserID(profileBean.getUserId());
		credentialsBean.setLoginStatus(0);
		credentialsBean.setPassword(password);
		credentialsBean.setAuthQuestion(authQuestion);
		credentialsBean.setAuthAnswer(authAnswer);
		profileBean.setPassword(null);
		profileBean.setAuthQuestion(null);
		profileBean.setAuthAnswer(null);
		credDao.save(credentialsBean);
		profileDao.save(profileBean);
		
		if(profileBean.getUserId()==uniqueId&&credentialsBean.getUserID()==profileBean.getUserId()&&credentialsBean.getLoginStatus()==0
				&&credentialsBean.getPassword()==password&&credentialsBean.getAuthQuestion()==authQuestion&&
				credentialsBean.getAuthAnswer()==authAnswer&&profileBean.getPassword()==null&&profileBean.getAuthQuestion()==null
				&&profileBean.getAuthAnswer()==null)
		return profileBean;
		else return null;
	}

	

}
