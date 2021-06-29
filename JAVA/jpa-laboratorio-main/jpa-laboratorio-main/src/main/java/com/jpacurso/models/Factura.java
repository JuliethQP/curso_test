package com.jpacurso.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class Factura  {

	private Long id;
	private String descripcion;
	private String observacion;
	private Date createAt;
	private Cliente cliente;
	private List<ItemFactura> items;

	public Factura() {
		this.items = new ArrayList<>();
	}






}