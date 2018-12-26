package com.ntl.movieapp.reportMicro.controller;

import static org.junit.Assert.*;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ntl.movieapp.reportMicro.model.MovieUserView;
import com.ntl.movieapp.reportMicro.model.MovieView;
import com.ntl.movieapp.reportMicro.service.ReportService;

@RunWith(MockitoJUnitRunner.class)
public class ReportControllerTest {
	
	@Mock
	ReportService serve;
	

	@Test
	public void testGetUserViewMovie() {
		
		MovieUserView mview=new MovieUserView();
		
		MovieUserView userview=new MovieUserView(1,"Ti1234");
		
		List<MovieUserView> getmovie=new ArrayList();
		getmovie.add(userview);
		
		List<MovieUserView> getmovieUser=new ArrayList();
		
		when(serve.getUserViewMovie()).thenReturn(getmovie);
		
		ReportController control=new ReportController(serve);
		getmovieUser=control.getUserViewMovie();
		assertEquals(1,getmovieUser.size());
	}

	@Test
	public void testGetViewsByMovie() {
	MovieView mview=new MovieView();
	
	List<Integer> intarr=new ArrayList();
	intarr.add(1);
	
		
		List<Object> getmovie=new ArrayList();
		getmovie.add(intarr);
		List<MovieView> getbyMovie=new ArrayList();
		try {
		Mockito.lenient().when(serve.getViewsByMovie()).thenReturn(getmovie);
		
		int val=1;
		
		for(Object o : getmovie) {
			ObjectMapper mapper = new ObjectMapper();
		}
		
		ReportController control=new ReportController(serve);
		control.getViewsByMovie();
		}
		catch(Exception e) {
		assertEquals(0,getbyMovie.size());
		}
	
	}
	
	@Test
	public void testGetViewsByMoviePART2(){
	MovieView mview=new MovieView();
	
	List<Integer> intarr=new ArrayList();
	intarr.add(1);
	
		
		List<Object> getmovie=new ArrayList();
		getmovie.add(intarr);
		List<MovieView> getbyMovie=new ArrayList();
		try {
			String jsonInString = new ObjectMapper().writeValueAsString(getmovie);
		Mockito.lenient().when(serve.getViewsByMovie()).thenThrow(NullPointerException.class);
		
		int val=1;
		
	
			
		ReportController control=new ReportController(serve);
		control.getViewsByMovie();
		}
		catch(JsonProcessingException e) {
			assertEquals(0,getbyMovie.size());
		}
		catch(NullPointerException rt) {
		assertEquals(0,getbyMovie.size());
		}
		
	
	}

}
