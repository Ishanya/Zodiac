package com.ntl.movieapp.search.service;


import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;


import java.time.LocalDate;
import java.util.ArrayList;


import org.junit.Test;
import org.junit.runner.RunWith;

import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import org.springframework.test.context.junit4.SpringRunner;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.ntl.movieapp.admin.dao.AdminDao;
import com.ntl.movieapp.admin.model.Movie;
import com.ntl.movieapp.admin.service.AdminService;

/*
 * author:Vibhanshu Chhangani
 * date:27/11/2018
 */

@RunWith(MockitoJUnitRunner.class)
public class AdminServiceTest {
	
	@Mock
	AdminDao dao;
	


	
	String stdate="12/11/2015";
	String startd[]=stdate.split("/");
	LocalDate dt=LocalDate.of(Integer.parseInt(startd[2]),Integer.parseInt(startd[1]), Integer.parseInt(startd[0]));
	

	Movie move=new Movie(5,"ishanya","jkbjb",dt,"kjbhjub");
	
	@Test
	public void testgetAllMovies() {
		
		
		List<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(dao.findAll()).thenReturn(listing);
		
		
	
		
		AdminService serve=new AdminService(dao);
		listing= serve.getAllMovie();
		assertEquals(1,listing.size());
	}
	
	/*
	 * testing for allMoviesByTitle method in service
	 */
	@Test
	public void testAllMoviesByTitle() {
	
		
		ArrayList<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(dao.findMoviesByTitle("kal")).thenReturn(listing);
		AdminService serve=new AdminService(dao);

		List<Movie> listingg=new ArrayList();
		listingg.add(move);
		listingg=serve.allMoviesByTitle("kal");
		
		assertEquals(1,listingg.size());
		
	}

	/*
	 * testing for allMoviesByCategory method in service
	 */
	@Test
	public void testAllMoviesByCategory() {
	
		
		ArrayList<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(dao.findMoviesByCategory("Horror")).thenReturn(listing);
		AdminService serve=new AdminService(dao);

		List<Movie> listingg=new ArrayList();
		listingg.add(move);
		
		listingg=serve.allMoviesByCategory("Horror");
		
		assertEquals(1,listingg.size());
		
	}
	
	/*
	 * testing for allMoviesByLanguage method in service
	 */
	@Test
	public void testAllMoviesByLanguage() {
	
		
		ArrayList<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(dao.findMoviesByLanguage("Hindi")).thenReturn(listing);
		AdminService serve=new AdminService(dao);

		List<Movie> listingg=new ArrayList();
		listingg.add(move);
		
		listingg=serve.allMoviesByLanguage("Hindi");
		
		assertEquals(1,listingg.size());
		
	}
	
	
	
	/*
	 * testing for allMoviesById method in service
	 */
	@Test
	public void testAllMoviesById() {
		List<Integer> listOfId=new ArrayList();
		listOfId.add(1);
		
		List<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(dao.findAllById(listOfId)).thenReturn(listing);
		
	
		
		AdminService serve=new AdminService(dao);
		listing= serve.allMoviesById(listOfId);
		assertEquals(1,listing.size());
	}
	
	/*
	 * testing for addMovies method in service
	 */
	@Test
	public void testAddMovie() {
	
		Movie mie=new Movie();
		
		when(dao.save(move)).thenReturn(move);
		AdminService serve=new AdminService(dao);

		
		mie=serve.addMovie(move);
		
		assertEquals(move.getMovieName(),mie.getMovieName());
		
	}	
	
	/*
	 * testing for editMovies method in service Part1
	 */
	
	
//	/*
//	 * testing for editMovies method in service Part2
//	 */
//	@Test
//	public void testEditMovieTwo() {
//
//		Movie mie=new Movie();
//		
//		when(dao.findById(1)).thenReturn(opt.of(move));
//		when(opt.of(move).isPresent()).thenReturn(false);
//		
//		AdminService serve=new AdminService(dao);
//		mie=serve.editMovie(move);
//		
//		assertEquals(null,mie.getMovieName());
//		
//	}	
	
	/*
	 * testing for deleteMovies method in service
	 */
	@Test
	public void testDeleteMovie() {
	
		Movie mie=new Movie();
		Mockito.lenient().doNothing().when(dao);
		AdminService serve=new AdminService(dao);
	int rel=serve.deleteMovie(1);
		
		assertEquals(1,rel);
		
	}	

	/*
	 * testing for viewMovie
	 */
	@Test
	public  void testViewMovie() {
		Optional<Movie> picture=null;
		when(dao.findById(1)).thenReturn(Optional.of(move));
		AdminService serve=new AdminService(dao);
		picture=serve.viewMovie(1);
		assertEquals(true,picture.isPresent());
	}
	
}
