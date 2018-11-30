package com.ntl.movieapp.search.service;




import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ntl.movieapp.search.dao.SearchDao;
import com.ntl.movieapp.search.model.Movie;


@Service
public class SearchService {
	
	@Autowired
	SearchDao dao;
	
	

	public SearchService() {
		super();
	}

	public SearchService(SearchDao dao) {
		super();
		this.dao=dao;
	}
	
	public List<Movie> allMoviesByTitle(String movieName){
		
		return dao.findMovies(movieName);
	}
	
	public List<Movie> allMoviesById(List<Integer> listOfId){
		
		
			return dao.findAllById(listOfId);
		
		
		
	}
	
}
