package com.ntl.movieapp.reportMicro.service;

import static org.junit.Assert.*;
import org.mockito.junit.MockitoJUnitRunner;

import com.ntl.movieapp.reportMicro.dao.ReportDao;
import com.ntl.movieapp.reportMicro.model.MovieUserView;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;

@RunWith(MockitoJUnitRunner.class)
public class ReportServiceTest {

	@Mock
	ReportDao dao;
	
	@Test
	public void testGetViewsByMovie() {
		List<Object> moviesView =new ArrayList();
		List<Object> moviesViewServe =new ArrayList();
		
		Mockito.lenient().when(dao.getMovieViews("2018-12-02")).thenReturn(moviesView);
		
		ReportService service=new ReportService(dao);
		moviesViewServe=service.getViewsByMovie();
		assertEquals(0,moviesViewServe.size());
		
	}

	@Test
	public void testGetUserViewMovie() {
		
		MovieUserView movieUserView=new MovieUserView(2,"Ti1234");
		
		List<Integer> userView=new ArrayList();
		userView.add(2);
		
		List<String> userData=new ArrayList();
		userData.add("Ti1234");
		
		List<MovieUserView> movieUser=new ArrayList();
			
		for(Integer i : userView) {
			Mockito.lenient().when(dao.getUserViewMovie("2018-12-04")).thenReturn(userView);
        	for(String s : userData) {
        		Mockito.lenient().when(dao.getUsersFromMovieId(2, "2018-12-04")).thenReturn(userData);
        	
        		movieUser.add(movieUserView);
        		
        	}
        }
		
		ReportService serve=new ReportService(dao);
		serve.getUserViewMovie();
		assertEquals(1,movieUser.size());
	}

}
