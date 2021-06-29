package com.jpacurso.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class Cliente  {


	private Long id;
	private String nombre;
	private String apellido;
	private String email;
	private Date createAt;
	private List<Factura> facturas;
	private String foto;

	public Cliente() {
		facturas = new ArrayList<>();
	}
}
