package com.ntl.movieapp.search.controller;

import static org.junit.Assert.*;

import org.mockito.junit.MockitoJUnitRunner;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;

import com.ntl.movieapp.admin.controller.AdminController;
import com.ntl.movieapp.admin.model.Movie;
import com.ntl.movieapp.admin.service.AdminService;

/*
 * author:Vibhanshu Chhangani
 * date:27/11/2018
 */

@RunWith(MockitoJUnitRunner.class)
public class AdminControllerTest {

	@Mock
	AdminService serve;
	
	String stdate="12/11/2015";
	String startd[]=stdate.split("/");
	LocalDate dt=LocalDate.of(Integer.parseInt(startd[2]),Integer.parseInt(startd[1]), Integer.parseInt(startd[0]));
	
	Movie move=new Movie(1,"ishanya","jkbjb",dt,"kjbhjub");
	
	@Test
	public void testgetAllMovie() {
		
		List<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(serve.getAllMovie()).thenReturn(listing);
		AdminController control=new AdminController(serve);
		listing=control.getAllMovie();
		assertEquals(1,listing.size());
	}
	
	
	/*
	 * testing for the searchListBy title method
	 */
	@Test
	public void testSearchListByTitle() {
		
		List<Movie> listing=new ArrayList();
		listing.add(move);
		
		when(serve.allMoviesByTitle("kal")).thenReturn(listing);
		AdminController control=new AdminController(serve);
		listing=control.searchListByTitle("kal");
		assertEquals(1,listing.size());
	}
	
//	/*
//	 * testing for the method searchListByCategory
//	 */
//	@Test
//	public void testSearchListByCategory() {
//		
//		List<Movie> listing=new ArrayList();
//		listing.add(move);
//		
//		when(serve.allMoviesByCategory("Horror")).thenReturn(listing);
//		AdminController control=new AdminController(serve);
//		listing=control.searchListByCategory("Horror");
//		assertEquals(1,listing.size());
//	}
	
	/*
	 * testing for the method searchListByLanguage
	 */
//	@Test
//	public void testSearchListByLanguage() {
//		
//		List<Movie> listing=new ArrayList();
//		listing.add(move);
//		
//		when(serve.allMoviesByLanguage("Hindi")).thenReturn(listing);
//		AdminController control=new AdminController(serve);
//		listing=control.searchListByLanguage("Hindi");
//		assertEquals(1,listing.size());
//	}

	/*
	 * testing for method SearchFavList 
	 */
	@Test
	public void testSearchFavList() {
		List<Movie> listing=new ArrayList();
		listing.add(move);
		
		List<Integer> listOfId=new ArrayList();
		listOfId.add(1);
		
		when(serve.allMoviesById(listOfId)).thenReturn(listing);
		AdminController control=new AdminController(serve);
		
		listing=control.searchFavList("1");
		
		assertEquals(1,listing.size());
	}

	/*
	 * testing register method
	 */
	@Test
	public void testRegister() {
		Movie picture=new Movie();
		when(serve.addMovie(move)).thenReturn(move);
		AdminController control=new AdminController(serve);
		picture=control.register(move);
		assertEquals(move.getMovieName(),picture.getMovieName());
	}
	
	/*
	 * testing for edit movie
	 */
	@Test
	public void TestEditMovie(){
		Movie picture=new Movie();
		when(serve.editMovie(move)).thenReturn(move);
		AdminController control=new AdminController(serve);
		picture=control.editMovie(move);
		assertEquals(move.getMovieName(),picture.getMovieName());
	}
	
	/*
	 * testing for view movie
	 */
	@Test
	public void testViewMovie() {
		Optional<Movie> picture = null;
		when(serve.viewMovie(1)).thenReturn(Optional.of(move));
		AdminController control=new AdminController(serve);
		picture=control.viewMovie(1);
		assertEquals(true,picture.isPresent());
	}
	
	/*
	 * testing for delete movie
	 */
	@Test
	public void testDeleteMovie() {
		when(serve.deleteMovie(1)).thenReturn(1);
		AdminController control=new AdminController(serve);
		int rel=control.deleteMovie(1);
		assertEquals(1,rel);
	}
}
