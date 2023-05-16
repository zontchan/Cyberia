import "./style.css";
function Article(){
    return(<article className="feedback-section">
        <div className="wrapper">
            <div className="feedback-section-content">
                <div className="feedback-section-info">
                    <h2 className="feedback-section-title">Расскажите
                        о вашем проекте</h2>
                    <p className="feedback-section-desc">Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</p>
                </div>
                <form action="" className="feedback-form">
                    <label>
                        <input type="email" className="feedback-email" placeholder="E-mail"/>
                    </label>
                    <label>
                        <input type="tel" className="feedback-phone" placeholder="Телефон"/>
                    </label>
                    <label>
                        <textarea className="feedback-message" placeholder="Сообщение"></textarea>
                    </label>
                    <div className="feedback-send-button-group">
                        <button type="submit" className="feedback-send-button">Отправить</button>
                        <p className="feedback-send-button-info">Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
                    </div>
                </form>
            </div>
        </div>
    </article>)
}

export default Article;