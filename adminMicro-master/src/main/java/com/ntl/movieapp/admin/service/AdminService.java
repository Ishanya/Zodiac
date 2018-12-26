package com.ntl.movieapp.admin.service;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ntl.movieapp.admin.dao.AdminDao;
import com.ntl.movieapp.admin.model.Movie;


@Service
public class AdminService {
	
	@Autowired
	AdminDao dao;
	
	

	public AdminService() {
		super();
	}

	public AdminService(AdminDao dao) {
		super();
		this.dao=dao;
	}
	
		public List<Movie> getAllMovie() {
		return dao.findAll();
	}

	
	
	public List<Movie> allMoviesByTitle(String movieName){
		
		return dao.findMoviesByTitle(movieName);
	}
	
	public List<Movie> allMoviesByCategory(String movieCategory) {
		return dao.findMoviesByCategory(movieCategory);
	}
	public List<Movie> allMoviesByLanguage(String movieLanguage) {
		return dao.findMoviesByLanguage(movieLanguage);
	}
	
	public List<Movie> allMoviesById(List<Integer> listOfId){
		return dao.findAllById(listOfId);	
	}

	public Movie addMovie(Movie movie) {
	
		return dao.save(movie);
	}

	public Movie editMovie(Movie movie) {
		Movie m1;
		
		try {
			Optional<Movie> m = dao.findById(movie.getMovieId());
			if(m.isPresent()) {
				
				 m1= dao.saveAndFlush(movie);
			}
			else {
				 m1 = new Movie();
			}
		}
		catch(Exception e) {
			 m1=new Movie();
		}
		return m1;
	}
	
	public int deleteMovie(int movieId) {
		int result;
		try {
			
			dao.deleteById(movieId);
			 result = 1;
		}
		catch (Exception e) {
			
			 result = 0;
		}
		    return result;
		
	}

	public Optional<Movie> viewMovie(int movieId) {
		return dao.findById(movieId);
	}


	
}
