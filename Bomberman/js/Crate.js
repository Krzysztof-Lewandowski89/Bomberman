function Crate(column, row){
	// Najpierw rysowana jest podłoga, dlatego do sx i sy przypisujemy dane podłogi
	this.sx = Board.elements.floor.sx;
	this.sy = Board.elements.floor.sy;
	// Gdzie na sprite sheet jest pierwsza klatka animacji
	this.anim_sx = 126;
	this.anim_sy = 0;
	// aktualna klatka animacji (frame)
	this.current_f = 0;
	// indexy klatek animacji
	this.f = [0,0,1,1,2,2,3,3,4,4,5,5];
	//
	this.type = 'empty';
	//
	this.sub_type = 'crate';
	//
	this.row = row;
	this.column = column;
	// Podmiana obiektu na planszy
	Game.board.b[this.row][this.column] = this;
}
Crate.prototype.draw = function() {
	// Rysowanie kratki
	Game.ctx.drawImage(
		Game.spr,
		this.anim_sx+this.f[this.current_f]*Game.board.fW,
		this.anim_sy,
		Game.board.fW,
		Game.board.fH,
		this.column*Game.board.fW*VAR.scale,
		this.row*Game.board.fH*VAR.scale,
		Game.board.fW*VAR.scale,
		Game.board.fH*VAR.scale

	);
	// Rośnie aktualny index klatki
	this.current_f ++;
	// Jak index klatki będzie równy lub większy ilości klatek
	if(this.current_f>=this.f.length){
		// Podmień obiekt na planszy na podłogę
		Game.board.b[this.row][this.column] = Board.elements.floor;
	}
};