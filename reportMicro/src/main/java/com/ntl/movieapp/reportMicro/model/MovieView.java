package com.ntl.movieapp.reportMicro.model;

import java.util.Date;

public class MovieView {
	private int movieId;
	private int movieViews;
	
	public MovieView() {
		super();
	}
	public MovieView(int movieId, int movieViews) {
		super();
		this.movieId = movieId;
		this.movieViews = movieViews;
	}
	
	/**
	 * @return the movieId
	 */
	public int getMovieId() {
		return movieId;
	}
	/**
	 * @param movieId the movieId to set
	 */
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	/**
	 * @return the movieViews
	 */
	public int getMovieViews() {
		return movieViews;
	}
	/**
	 * @param movieViews the movieViews to set
	 */
	public void setMovieViews(int movieViews) {
		this.movieViews = movieViews;
	}
	
	
	

}
